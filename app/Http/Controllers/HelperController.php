<?php

namespace App\Http\Controllers;

use App\Models\Language;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use TPDF;

class HelperController extends Controller
{
    public function dateFormatter($format){
        switch ($format){
            case 'YYYY-MM-DD hh:mm A':
                return 'Y-m-d h:i A';
            default:
                return 'Y-m-d';
        }
    }
    public function tdDataBuilder($column, $item) {
        $data_type = $column['data_type'] ?? 'string';
        if (isset($data_type)) {
            switch ($data_type) {
                case 'string':
                    if (isset($column['translate'])) {
                        if ($column['translate']) {
                            return translate($this->resolve($column['key'], $item));
                        } else {
                            return $this->resolve($column['key'], $item);
                        }
                    }
                    return $this->resolve($column['key'], $item);
                case 'date':
                    return date($this->dateFormatter($column['format']), strtotime($this->resolve($column['key'], $item)));
                case 'boolean':
                    $trueValue = $column['true_value'] ?? 'Active';
                    $falseValue = $column['false_value'] ?? 'Inactive';
                    return $this->resolve($column['key'], $item) ? $trueValue : $falseValue;
            }
        }
    }


    public function resolve($path, $obj) {
        $path = explode('.', $path);
        return array_reduce($path, function($prev, $curr) use ($obj) {
            return $prev ? $prev[$curr] : null;
        }, $obj ? $obj : $GLOBALS);
    }

    public function downloadPdf($lang, Request $request)
    {
        $data = [
            'data' => $request->get('data'),
            'columns' => $request->get('columns'),
            'ignore_columns' => $request->get('ignore_columns'),
            'title' => $request->get('title'),
            'increment' => $request->get('increment')
        ];
        TPDF::SetTitle($data['title']);
        $ths = '';
        $ths .= $data['increment']?!in_array('increment', $data['ignore_columns'])?'<th style="font-weight: bold">'.translate('Number').'</th>':null:null;
        foreach ($data['columns'] as $column){
            $ths .= !in_array($column['key'], $data['ignore_columns']) ? '<th style="font-weight: bold">'.translate($column['name']).'</th>':null;
        }
        $tds = '';
        $counter = 1;
        foreach ($data['data'] as $td) {
            $tds .= '<tr>';
            if ($data['increment']) {
                $tds .= !in_array('increment', $data['ignore_columns'])?'<td>'.$counter++.'</td>':null;
            }
            $tds .= implode('', collect($data['columns'])->map(function($column) use ($td, $data){
                if (!in_array($column['key'], $data['ignore_columns'])) {
                    return '<td >'.$this->tdDataBuilder($column, $td).'</td>';
                }
                return null;
            })->toArray());
            $tds .= '</tr>';
        }
        $lg = array();
        $lg['a_meta_charset'] = 'UTF-8';
        $lg['a_meta_dir'] = Language::whereAbbr($request->lang)->first()?->direction;
        $lg['a_meta_language'] = $lang;
        $lg['w_page'] = 'page';

        TPDF::setLanguageArray($lg);

        TPDF::SetFont('dejavusans', '', 12);

        TPDF::AddPage();
        $title = translate($data['title']);

        $htmlpersian = <<<EOF
            <h3>$title</h3>
            <table align='center' class='payment'>
                <thead style='background: #ccc!important;'>
                    <tr>
                        $ths
                    </tr>
                </thead>
                <tbody>
                    $tds
                </tbody>
            </table>
            <style>
                table {
                  border-collapse: collapse;
                  width: 100%;
                  text-align: center;
                  border: 1px solid #ddd;
                }

                th, td {
                  text-align: center;
                  border: 1px solid #ddd;
                }

                th {
                  font-weight: bolder;
                  background-color: #aaa;
                }

                tr:nth-child(even) {
                  background-color: #f2f2f2;
                }
            </style>
        EOF;
        TPDF::WriteHTML($htmlpersian, true, 0, true, 0);
        TPDF::Output($data['title'].'.pdf', 'I');
        return response()->noContent();
    }

    public static function removeFile($file){
        if(File::exists(public_path('storage/'.$file))){
            File::delete(public_path('storage/'.$file));
        }
    }
}
