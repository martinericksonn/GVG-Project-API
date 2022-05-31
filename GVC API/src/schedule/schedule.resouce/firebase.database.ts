import 'firebase/auth';
import 'firebase/firestore';
import { Schedule } from 'src/model/schedule.model';
import { CRUDReturn } from '../../model/crud_return.interface';
import { SystemMessage } from '../../model/system_message.model';

const admin = require('firebase-admin');
const systemMessage = new SystemMessage();

export class DatabaseQuery {
  static async commitScedule(subject: Schedule): Promise<CRUDReturn> {
    try {
      var db = admin.firestore();
      await db
        .collection('subjects')
        .doc(subject['offer_no'])
        .set(subject.toJson());

      console.log(subject.toJson());
      return systemMessage.success(subject.toJson());
    } catch (error) {
      console.log(error);
      return systemMessage.error(error);
    }
  }

  static async getAllSchedule(): Promise<CRUDReturn> {
    try {
      var db = admin.firestore();
      var schedRef = await db.collection('subjects').get();
      var populatedData = [];

      schedRef.forEach((doc) => {
        var data = doc.data();

        var sched = new Schedule(data);
        populatedData.push(sched);
      });

      return systemMessage.success(populatedData);
    } catch (error) {
      return systemMessage.error(error);
    }
  }
}
