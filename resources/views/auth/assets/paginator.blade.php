@if($paginator->total() > $paginator->count())
    <br>
    <div class="container-fluid">
        <div class="row justify-content-md-center">
            <div class="col-md-auto">

                {{ $paginator->links() }}

            </div>
        </div>
    </div>
@endif
