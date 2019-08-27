<?php


namespace App\Console\Commands;


use App\Classes\Socket\QuestsSocket;
use Illuminate\Console\Command;
use Ratchet\Http\HttpServer;
use Ratchet\Server\IoServer;
use Ratchet\WebSocket\WsServer;

class QuestServer extends Command
{
    protected $signature = 'questserver:serve';

    protected $description = 'Command description';

    public function __construct()
    {
        parent::__construct();
    }


    public function handle()
    {
        $this->info("Start server");
        $server = IoServer::factory(
            new HttpServer(
                new WsServer(
                    new QuestsSocket()
                )
            ),8080
        );
        $server->run();
    }
}
