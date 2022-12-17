<?php

namespace App\Http\Controllers\Configurations;

use App\Helpers\DatatableBuilder;
use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Models\LanguageDictionary;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class LanguageController extends Controller
{
    public static function getAllLanguages(){
        return cache()->remember('languages', 60*24*30, function(){
            return Language::query()->get();
        });
    }
    public function index(){
        $this->allowed('language-access');
        return Inertia::render('Configuration/Language/LanguageIndex', [
            'active' => 'language',
            'languages' => static::getAllLanguages(),
        ]);
    }
    public function store(Request $request){
        $this->allowed('language-create-language');
        $data = $request->validate([
            'name' => 'required|unique:languages',
            'abbr' => 'required|unique:languages',
            'direction' => 'required'
        ]);
        $data['abbr'] = strtolower($data['abbr']);
        Language::query()->create($data);
        cache()->forget('languages');
        return back()->with(['message'=>translate('Added successfully'), 'type'=>'success']);
    }

    public function show($lang, Language $language, Request $request){
        $this->allowed('language-dictionary-access');
        $language_words = LanguageDictionary::query()->where('language_id', $language->id);
        $datatable = new DatatableBuilder($language_words, $request, ['word', 'translate', 'id']);
        return Inertia::render('Configuration/Language/LanguageDetails',[
            'language' => $language,
            'active' => 'language',
            'words' => $datatable->build()
        ]);
    }

    public function update($lang, Language $language, Request $request){
        $data = $request->validate([
            'name' => ['required', Rule::unique('languages')->ignore($language)],
            'abbr' =>  ['required', Rule::unique('languages')->ignore($language)],
            'direction' => 'required',
        ]);
        $data['abbr'] = strtolower($data['abbr']);
        $language->update($data);
        cache()->forget('languages');
        return back()->with(['message'=>translate('Updated successfully'), 'type'=>'success']);
    }

    public function destroy($lang, Language $language){
        $this->allowed('language-delete-language');
        if($language->words->count() > 0){
            return back()->with(['message'=>translate('Cannot delete this language'), 'type'=>'error']);
        }else{
            $language->delete();
            cache()->forget('languages');
            return back()->with(['message'=>translate('Deleted successfully'), 'type'=>'success']);
        }
    }

}
