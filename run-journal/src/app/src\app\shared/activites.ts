import { IActivity } from './activity.model';

expost const SAVED_ACTIVITES: IActivity[] =[
{
	"id": 1,
	"name": "Ride Bike",
	"date": new Date('09/26/2017'),
	"distance": 5.2,
	"comments"" "what a ride",
	"gpxData": '../../assets/gpx/1.gpx'
},
{
   "id": 2,
   "name": 'Stone Mountain',
   "date": new Date('09/27/2017'),
   "gpxData": '../../assets/gpx/1.gpx',
   "distance": 2.1,
   "comments": 'windy.'
 },
 {
   "id": 3,
   "name": 'School route',
   "date": new Date('09/29/2017'),
   "gpxData": '../../assets/gpx/2.gpx',
   "distance": 2.3,
   "comments": 'morning run.'
 },
 {
   "id": 4,
   "name": 'Church',
   "date": new Date('09/30/2017'),
   "gpxData": '../../assets/gpx/4.gpx',
   "distance": 4.5,
   "comments": 'oh lord help me.'
 }

]