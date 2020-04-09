<?php namespace Lanz\Commentable;

use Illuminate\Support\ServiceProvider;

class CommentableServiceProvider extends ServiceProvider
{
    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = false;

    /**
     * Bootstrap the application events.
     */
    public function boot()
    {
        $this->commands('command.commentable.migration');
        $this->app->bindShared('command.commentable.migration', function ($app) {
            return new MigrationCommand();
        });
    }

    /**
     * Register the service provider.
     */
    public function register()
    {
        $this->app->register('Baum\Providers\BaumServiceProvider');
    }

    /**
     * Get the services provided.
     *
     * @return array
     */
    public function provides()
    {
        return [
            'command.commentable.migration',
        ];
    }
}
