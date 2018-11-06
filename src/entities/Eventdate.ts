import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  JoinColumn,
  OneToOne,
  Timestamp,
  ManyToMany,
  ManyToOne
} from "typeorm";
import User from "./User";
import Event from "./Event";

// types

@Entity("eventdates")
export default class Eventdate extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  startTime: string; //Timestamp

  @Column()
  endTime: string; //Timestamp

  @ManyToOne(type => Event, event => event.eventdates)
  event: Event;
}
