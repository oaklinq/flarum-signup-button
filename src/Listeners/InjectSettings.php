<?php

namespace Kvothe\SignupButton\Listeners;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Api\Event\Serializing;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class InjectSettings
{
    protected $settings;
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'permissions']);
    }
    public function permissions(Serializing $event)
    {
        if ($event->serializer instanceof ForumSerializer) {
            $event->attributes['kvothe-sub.replace-discussion-button'] = (bool) $this->settings->get('kvothe-sub.replace-discussion-button');
            $event->attributes['kvothe-sub.hide-desktop'] = (bool) $this->settings->get('kvothe-sub.hide-desktop');
        }
    }
}