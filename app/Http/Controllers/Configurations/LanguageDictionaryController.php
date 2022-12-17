<?php

namespace App\Http\Controllers\Configurations;

use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Models\LanguageDictionary;
use Illuminate\Http\Request;

class LanguageDictionaryController extends Controller
{
    public function store($lang, Request $request){
        $this->allowed('language-dictionary-add-new-word-to-dictionary');
        $data = $request->validate([
            'word' => ['required', 'string', function($field, $value, $error) use ($request){
                if(LanguageDictionary::query()->where('word',$value)->where('language_id', $request->get('language_id'))->exists()){
                    $error('This word is already in the dictionary');
                }
            }],
            'translate' => ['required', 'string'],
            'language_id' => ['required']
        ]);
        $language = LanguageDictionary::query()->create($data);
        cache()->forget('translated_words_'.$language->language->abbr);
        return back()->with(['message'=>translate('Added successfully'), 'type'=>'success']);
    }

    public function update($lang, LanguageDictionary $dictionary ,Request $request)
    {
        $this->allowed('language-dictionary-edit-word');
        $data = $request->validate([
            'word' => ['required', 'string', function($field, $value, $error) use ($request, $dictionary){
                if(LanguageDictionary::query()
                    ->where('word',$value)
                    ->where('language_id', $request->get('language_id'))
                    ->where('id', '!=', $dictionary->id)
                    ->exists()
                ){
                    $error('This word is already in the dictionary');
                }
            }],
            'translate' => ['required', 'string'],
            'language_id' => ['required']
        ]);
        $dictionary->update($data);
        cache()->forget('translated_words_'.$dictionary->language->abbr);
        return back()->with(['message'=>translate('Added successfully'), 'type'=>'success']);

    }

    public function destroy($lang, Request $request, LanguageDictionary $dictionary)
    {
        $request->user()->isAllowed('language-dictionary-delete-word');
        $dictionary->delete();
        cache()->forget('translated_words_'.$dictionary->language->abbr);
        return back()->with(['message'=>translate('Deleted successfully'), 'type'=>'success']);
    }
    public static function returnAllWords($lang)
    {
        if ($lang=="eng"){
            return [];
        }else{
            $words = [];
            $translate = cache()->remember('translated_words_'.$lang, 60*60*24, function() use ($lang){
                return Language::with('words')->where(
                    'abbr',$lang)->first()?->words;
            });
            if($translate){
                foreach ($translate as $word){
                    $words[preg_replace('!\s+!','',str_replace(' ','-',strtolower($word->word)))] = $word->translate;
                }
                return $words;
            }
        }
    }

}
