import { CounterService } from "app/counter.service";
import { Injectable } from "@angular/core";

@Injectable()
export class UsersService {

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterService: CounterService) {}

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.logCounterInactive(this.inactiveUsers.length);
    }

    setToActive(id: number) {
        this.activeUsers.push(this.activeUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.logCounterActive(this.activeUsers.length);
    }
}