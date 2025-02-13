<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;

class CategoryController extends ApiController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::orderByName()->get();

        return $this->success([
            'categories' => $categories
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryRequest $request)
    {
        $inputs = $request->only(['name']);
        $category = Category::create($inputs);

        return $this->success([
            'message' => 'Category created',
            'category' => $category
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $category = Category::findOrFail($id);

        return $this->success([
            'category' => $category
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $inputs = $request->only(['name']);

        $category = Category::findOrFail($id)
                ->update($inputs);

        return $this->success([
            'message' => 'Kategori güncellendi',
            'category' => $category
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::findOrFail($id);

        $category->delete();

        return $this->success([
            'message' => 'Kategori silindi'
        ], 200);
    }
}
