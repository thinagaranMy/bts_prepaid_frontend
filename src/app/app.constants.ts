import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server = 'http://localhost:8000/';
    public ApiUrl = 'greeting';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}