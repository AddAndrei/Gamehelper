<?php


namespace App\Classes\Socket;


use App\Classes\Socket\Base\BaseSocket;
use Ratchet\ConnectionInterface;
use App\Repositories\QuestsRepository;

class QuestsSocket extends BaseSocket
{
    protected $client;
    private $quest;
    public function __construct()
    {
        $this->client = new \SplObjectStorage;
        $this->quest = app(QuestsRepository::class);
    }

    public function onOpen(ConnectionInterface $conn)
    {
        //parent::onOpen($conn);  TODO: Change the autogenerated stub
        $this->client->attach($conn);
        echo "New connection ({$conn->resourceId})\n";
    }

    public function onMessage(ConnectionInterface $from, $msg)
    {
        //parent::onMessage($from, $msg); // TODO: Change the autogenerated stub
        $numRecv = count($this->client) -1;
        ;
        $q = json_decode($msg);
        $quests = $this->quest->getQuests($q->game);

        foreach ($this->client as $client)
        {

                $client->send($quests);

        }

    }


    public function onClose(ConnectionInterface $conn)
    {
        //parent::onClose($conn);  TODO: Change the autogenerated stub
        $this->client->detach($conn);
        echo "close Connection";
    }

    public function onError(ConnectionInterface $conn, \Exception $e)
    {
        //parent::onError($conn, $e); // TODO: Change the autogenerated stub
        echo "An error has occurred {$e->getMessage()} \n";
        $conn->close();
    }


}
