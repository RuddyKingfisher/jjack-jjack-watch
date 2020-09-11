import { observable, computed, action, autorun } from 'mobx';

export class BirdingListStore {

    sayHi = autorun(() => console.log(`Hi!, ${this.numberOfRecords}`));

    @observable birdingList = [];
    @computed get numberOfRecords() {
        return this.birdingList.length;
    }

    addBird() {
        this.birdingList.push({
            species: 'RuddyKingfisher'
        });
    }
}