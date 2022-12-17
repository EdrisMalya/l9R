<?php

namespace App\Helpers;

class DatatableBuilder
{
    private $query;
    private $request;
    private array $search_columns;

    public function __construct($query, $request, $search_columns = []){
        $this->query = $query;
        $this->request = $request;
        $this->search_columns = $search_columns;
    }
    public function build(){
        $search_columns = $this->search_columns;
        $limit = 10;
        $order_by = 'id';
        $order_direction = 'desc';
        if($this->request->has('search')){
            $this->query = $this->query->where(function($whereCondition) use($search_columns) {
                $whereCondition->where($search_columns[0], 'LIKE', '%'.$this->request->get('search').'%');
                foreach (array_slice($search_columns, 1) as $column){
                    $whereCondition->orWhere($column, 'LIKE', '%'.$this->request->get('search').'%');
                }
            });
        }
        if($this->request->has('limit')){
            $limit = $this->request->get('limit');
            if($limit > 100){
                return back()->with(['message' => 'Number of record per page cannot be greater than 100', 'type' => 'error']);
            }
        }

        if($this->request->has('order_by')){
            $order_by = $this->request->get('order_by');
        }
        if($this->request->has('direction')){
            $order_direction = $this->request->get('direction');
        }

        return $this->query->orderBy($order_by, $order_direction)->paginate($limit);
    }
}
