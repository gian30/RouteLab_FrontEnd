import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { firestore } from 'firebase/app';
import { map, switchMap } from 'rxjs/operators';
import { Observable, combineLatest, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    constructor(
        private afs: AngularFirestore,
        private router: Router
    ) { }


    getMyMsgs(userId: string, receiverId: string) {
        const ref = this.afs.collection('chats').doc(userId + '-' + receiverId);
        return ref.valueChanges();
    }

    getReceiverMsg(userId: string, receiverId: string) {
        const ref = this.afs.collection('chats').doc(receiverId + '-' + userId);
        return ref.valueChanges();
    }

    async create(userId, receiverId, content) {
        const data = {
            userId,
            receiverId,
            content,
            createdAt: Date.now()
        };
        const ref = this.afs.collection('chats/').doc(userId + '-' + receiverId);
        return ref.set({ info: firestore.FieldValue.arrayUnion(data) });
    }

    async sendMessage(userId, receiverId, content) {
        const data = {
            userId,
            receiverId,
            content,
            createdAt: Date.now()
        };
        if (userId) {
            const ref = this.afs.collection('chats/').doc(userId + '-' + receiverId);
            return ref.update({ info: firestore.FieldValue.arrayUnion(data) });
        }
    }

}
