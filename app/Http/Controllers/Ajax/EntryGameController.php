<?php


namespace App\Http\Controllers\Ajax;

use App\Repositories\EntryRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class EntryGameController extends BaseController
{
    /**
     * EntryGameController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * @param Request $request
     * @param EntryRepository $entry
     * @return string
     */
    public function entry(Request $request,EntryRepository $entry)
    {
        return $entry->entryGame($request->all());
    }




}
