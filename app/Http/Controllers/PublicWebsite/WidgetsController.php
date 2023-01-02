<?php

namespace App\Http\Controllers\PublicWebsite;

use App\Http\Controllers\Controller;
use App\Models\Widget;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class WidgetsController extends Controller
{
    public function store($lag, Request $request){
        $this->allowed('widgets-create-widgets');
        $data = $request->validate([
            'name' => ['required', 'unique:widgets'],
            'icon' => ['required'],
        ]);
        Widget::create($data);
        return back()->with(['message' => translate('Save successfully'), 'type' => 'success']);
    }

    public function update($lang, Request $request, Widget $widget){
        $this->allowed('widgets-update-widgets');
        $data = $request->validate([
            'name' => ['required', Rule::unique('widgets')->ignore($widget)],
            'icon' => ['required'],
        ]);
        $widget->update($data);
        return back()->with(['message' => translate('Updated successfully'), 'type' => 'success']);
    }

    public function destroy($lang, Request $request, Widget $widget){
        $this->allowed('widgets-delete-widgets');
        $widget->delete();
        return back()->with(['message' => translate('Deleted successfully'), 'type' => 'success']);
    }
}
