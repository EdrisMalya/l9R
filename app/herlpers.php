<?php

function translate($word, $variables = []) {
    static $words = [];
    $lang = request()->lang;

    switch ($lang) {
        case 'eng':
            if (sizeof($variables) > 0) {
                $word = strtr($word, $variables);
            }
            return str_replace(['[',']'], ['',''], $word);
        default:
            if (empty($words)) {
                $words = \App\Http\Controllers\Configurations\LanguageDictionaryController::returnAllWords($lang);
            }
            $array_key = mb_strtolower(trim(str_replace(' ', '-', $word)));
            if (isset($words[$array_key])) {
                $new_words = $words[$array_key];
                if (sizeof($variables) > 0) {
                    $new_words = strtr($new_words, $variables);
                }
                return str_replace(['[',']'], ['',''], $new_words);
            } else {
                if (sizeof($variables) > 0) {
                    $word = strtr($word, $variables);
                }
                return str_replace(['[',']'], ['',''], $word);
            }
    }
}
