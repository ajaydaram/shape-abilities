import React from 'react';
import { Survey } from 'survey-react-ui';
//import "survey-core/defaultV2.min.css";
import "./index.css";
import "survey-core/defaultV2.css";
import jsPDF from "jspdf";
import { Model } from 'survey-react';
import axios from "axios";


const surveyJSON = {
      "title": "S.H.A.P.E Inventory",
      "logoPosition": "right",
        "pages": [
        {
          "name": "SPIRITUAL GIFT ASSESSMENT QUESTIONNAIRE",
          "elements": [
            {
              "type": "rating",
              "name": "1",
              "title": "I have a desire to speak direct messages from God that edifies, exhorts or comforts others.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "2",
              "title": "I have enjoyed relating to a certain group of people over a long period of time, sharing personally in their successes and failures.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "3",
              "title": "People have told me that I have helped them learn biblical truth in meaningful ways.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "4",
              "title": "I have applied spiritual truth effectively to situations in my own life.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "5",
              "title": "Others have told me I have helped them distinguish key and important facts of Scripture.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "6",
              "title": "I enjoyed challenging people's perspective of God by using various forms of art.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "7",
              "title": "Others in the church have noted that I have been able to see through phoniness before it was evident to other people.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "8",
              "title": "I find I manage money well in order to give liberally to the Lord's work.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "9",
              "title": "I have assisted Christian leaders to relieve them for their essential job.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "10",
              "title": "I have a desire to work with those who have physical or mental problems, to alleviate their suffering.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "11",
              "title": "I like to start churches in places where they do not presently exist.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "12",
              "title": "I have led others to a decision for salvation through faith in Christ.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "13",
              "title": "My home is always open to people passing through who need a place to stay.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "14",
              "title": "When in a group, I am the one others look to for vision and direction.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "15",
              "title": "When I speak, people seem to listen and agree.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "16",
              "title": "When a group I am in is lacking organisation, I tend to step in to fill the gap.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "17",
              "title": "I tend to see potential in people.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "18",
              "title": "I enjoyed praying for long periods of time and receive leadings as to what God wants me to pray for.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "19",
              "title": "Through God I have revealed specific things that will happen in the future.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "20",
              "title": "I have enjoyed assuming the responsibility for the spiritual well-being of a particular group of Christians.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "21",
              "title": "I feel I can explain the New Testament teaching about the health and ministry of the Body of Christ in a relevant way.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "22",
              "title": "I can intuitively arrive at solutions to fairly complicated problems.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "23",
              "title": "I have had insights of spiritual truth that others have said helped bring them closer to God.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "24",
              "title": "I enjoyed developing and using my artistic skills (art, drama, music, photography, etc).",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "25",
              "title": "I can see the Spirit of God resting on certain people from time to time.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "26",
              "title": "My giving records show that I give considerably more than 10 percent of my income to the Lord's work.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "27",
              "title": "Other people have told me that I have helped them become effective in their ministries.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "28",
              "title": "I have cared for others when they have had material or physical needs.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "29",
              "title": "I am attracted to the idea of serving in another country or ethnic community.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "30",
              "title": "I have shared joyfully how Christ has brought me to Himself in a way that is meaningful to non-believers.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "31",
              "title": "I enjoy taking charge of church suppers or social events.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "32",
              "title": "I have believed God for the impossible and seen it happen in a tangible way.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "33",
              "title": "Other Christians have followed my leadership because they believed in me.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "34",
              "title": "I enjoy handling the details of organising ideas, people, resources and time for more effective ministry.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "35",
              "title": "I enjoyed reassuring and strengthening those who are discouraged.",
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "36",
              "title": "When I hear a prayer request, I pray for that need for several days at least.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "37",
              "title": "People have told me that I have communicated timely and urgent messages that must have come directly from the Lord.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "38",
              "title": "I feel unafraid of giving spiritual guidance and direction to a group of Christians.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "39",
              "title": "I can devote considerable time to learning new biblical truths in order to communicate them to others.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "40",
              "title": "When a person has a problem, I can frequently guide him or her to the best biblical solution.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "41",
              "title": "Through study or experience, I have discerned major strategies or techniques God seems to use in furthering His kingdom.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "42",
              "title": "I helped people understand themselves, their relationships, and God better through artistic expression.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "43",
              "title": "I can tell with a fairly high degree of assurance when a person is afflicted by an evil spirit.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "44",
              "title": "When I am moved by an appeal to give to God's work, I usually can find the money I need to do it.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "45",
              "title": "I have enjoyed doing routine tasks that have led to more effective ministry by others.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "46",
              "title": "I enjoy visiting in hospitals and/or retirement homes, and feel I do well in such a ministry.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "47",
              "title": "I am willing to take an active part in starting a new church.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "48",
              "title": "Non-Christians have noted that they feel comfortable when they are around me, and that I have a positive effect on them towards developing a faith in Christ.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "49",
              "title": "When people come to our home, they indicate that they \"feel at home\" with us.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "50",
              "title": "Other people have told me that I had faith to accomplish what seemed impossible to them.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "51",
              "title": "When I set goals, others seem to accept them readily.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "52",
              "title": "I have been able to make effective and efficient plans for accomplishing the goals of a group.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "53",
              "title": "I give hope to others by directing them to the promises of God",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "54",
              "title": "Intercessory prayer is one of my favorite ways of spending time with God.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "55",
              "title": "I sometimes have a strong sense of what God wants to say to people in response to particular situations.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "56",
              "title": "I have helped fellow believers by guiding them to relevant portions of the Bible and praying with them.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "57",
              "title": "I feel I can communicate biblical truth to others and see resulting changes in knowledge, attitudes, values or conduct.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "58",
              "title": "Some people indicate that I have perceived and applied biblical truth to the specific needs of fellow believers.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "59",
              "title": "I study and read quite a bit in order to learn new biblical truths.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "60",
              "title": "I like finding new and fresh ways of communicating God's truth.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "61",
              "title": "I can recognize whether a person's teaching is from God, from Satan, or of human origin.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "62",
              "title": "I am so confident that God will meet my needs that I give to Him sacrificially and consistently.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "63",
              "title": "When I do things behind the scenes and others are helped, I am joyful.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "64",
              "title": "People call on me to help those who are less fortunate.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "65",
              "title": "I would be willing to leave comfortable surroundings if it would enable me to share Christ with more people.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "66",
              "title": "I get frustrated when others don't seem to share their faith with unbelievers as much as I do.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "67",
              "title": "Others have mentioned to me that I am a very hospitable person.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "68",
              "title": "There have been times when I have felt sure I knew God's specific will for the future growth of His work, even when others have not been so sure.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "69",
              "title": "When I join a group, others seem to back off and expect me to take the leadership.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "70",
              "title": "I am able to give directions to others without using persuasion to get them to accomplish tasks.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "71",
              "title": "I reassure those who need to take courageous action in their faith, family or life.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "72",
              "title": "Others have told me that my prayers for them have been answered in tangible ways.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "73",
              "title": "I sometimes feel that I know exactly what God wants to do in ministry at a specific point in time.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "74",
              "title": "People have told me that I have helped them be restored to the Christian community.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "75",
              "title": "Studying the Bible and sharing my insights with others is very satisfying for me.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "76",
              "title": "I have felt an unusual presence of God and personal confidence when important decisions needed to be made.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "77",
              "title": "I have the ability to discover new truths for myself through reading or observing situations firsthand.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "78",
              "title": "I apply various artistic expressions to communicate God's truth.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "79",
              "title": "I can tell whether a person is genuinely speaking in tongues.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "80",
              "title": "I have been willing to maintain a lower standard of living in order to benefit God's work.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "81",
              "title": "When I serve the Lord, I really do not care who gets the credit.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "82",
              "title": "I would enjoy spending time with a lonely, shut-in person or someone in prison.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "83",
              "title": "More than most, I have had a strong desire to see people of other nations won to the Lord.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "84",
              "title": "I am interested to befriend non-believers because of my desire to win them to Christ.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "85",
              "title": "I desire to make my home available to those in the Lord's service whenever needed.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "86",
              "title": "Others have told me that I am a person of unusual vision.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "87",
              "title": "When I am in charge, things seem to run smoothly.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "88",
              "title": "I have enjoyed bearing the responsibility for the success of a particular task within my church.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "89",
              "title": "I strengthen those who are wavering in their faith.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "90",
              "title": "When I pray, God frequently speaks to me, and I recognize His voice.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "91",
              "title": "I feel compelled to expose sin wherever I see it and to challenge people to repentance.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "92",
              "title": "I patiently but firmly nurture others in their development as believers",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "93",
              "title": "I enjoy explaining things to people so that they can grow spiritually.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "94",
              "title": "I have insights into how to solve problems that others do not see.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "95",
              "title": "I confidently share my knowledge and insight with others.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "96",
              "title": "I regularly need to get alone to reflect and develop my imagination.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "97",
              "title": "I can sense when demonic forces are at work in a person or situation.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "98",
              "title": "I believe I have been given an abundance of resources so that I may give more to the Lord's work.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "99",
              "title": "I readily and happily use my natural or learned skills to help wherever needed.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "100",
              "title": "I enjoy doing practical things for others who are in need.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "101",
              "title": "I am able to orchestrate or oversee several church ministries.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "102",
              "title": "I seek opportunities to talk about spiritual matters with unbelievers.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "103",
              "title": "I can make people feel at ease even in unfamiliar surroundings.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "104",
              "title": "I can move forward in spite of opposition or lack of support when I sense God's blessings in an undertaking.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "105",
              "title": "I figure out where we need to go and help others to get there.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "106",
              "title": "I can visualize a coming event, anticipate potential problems and develop contingency plans.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "107",
              "title": "I am able to challenge or rebuke others in order to foster spiritual growth.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
            {
              "type": "rating",
              "name": "108",
              "title": "I often see specific results in direct response to my prayers.",
              "isRequired": true,
              "rateCount": 4,
              "rateMin": 0,
              "rateMax": 3,
              "minRateDescription": "Not at all",
              "maxRateDescription": "Much"
            },
          ],
          "title": "SPIRITUAL GIFT ASSESSMENT QUESTIONNAIRE",
          "description": "For each statement, select the score that reflects the extent of its truth in your life. 0 for not at all, 1 for little, 2 for some, 3 for much",
        }
      ]
    }
;


function App() {

  const onSurveyComplete = async (survey) => {
    const answers = survey.data;

    const Prophecy = answers['1'] + answers['19'] + answers['37'] + answers['55'] + answers['73'] + answers['91'];
    const Shepherding = answers['2'] + answers['20'] + answers['38'] + answers['56'] + answers['74'] + answers['92'];
    const Teaching = answers['3'] + answers['21'] + answers['39'] + answers['57'] + answers['75'] + answers['93'];
    const Wisdom = answers['4'] + answers['22'] + answers['40'] + answers['58'] + answers['76'] + answers['94'];
    const Knowledge = answers['5'] + answers['23'] + answers['41'] + answers['59'] + answers['77'] + answers['95'];
    const Creative_Comm = answers['6'] + answers['24'] + answers['42'] + answers['60'] + answers['78'] + answers['96'];
    const Discernment = answers['7'] + answers['25'] + answers['43'] + answers['61'] + answers['79'] + answers['97'];

    const Giving = answers['8'] + answers['26'] + answers['44'] + answers['62'] + answers['80'] + answers['98'];
    const Helps = answers['9'] + answers['27'] + answers['45'] + answers['63'] + answers['81'] + answers['99'];
    const Mercy = answers['10'] + answers['28'] + answers['46'] + answers['64'] + answers['82'] + answers['100'];
    const Apostleship = answers['11'] + answers['29'] + answers['47'] + answers['65'] + answers['83'] + answers['101'];
    const Evangelism = answers['12'] + answers['30'] + answers['48'] + answers['66'] + answers['84'] + answers['102'];
    const Hospitality = answers['13'] + answers['31'] + answers['49'] + answers['67'] + answers['85'] + answers['103'];
    const Faith = answers['14'] + answers['32'] + answers['50'] + answers['68'] + answers['86'] + answers['104'];
    const Leadership = answers['15'] + answers['33'] + answers['51'] + answers['69'] + answers['87'] + answers['105'];
    const Administration = answers['16'] + answers['34'] + answers['52'] + answers['70'] + answers['88'] + answers['106'];
    const Encouragement = answers['17'] + answers['35'] + answers['53'] + answers['71'] + answers['89'] + answers['107'];
    const Intercession = answers['18'] + answers['36'] + answers['54'] + answers['72'] + answers['90'] + answers['108'];

    const doc = new jsPDF({ format: [210, 600] });
    doc.text('Spiritual Gift Assessment Results:', 20, 30);
    doc.text(`Prophecy: 1, 19, 37, 55, 73, 91: ${Prophecy}`, 20, 40);
    doc.text(`Shepherding: 2, 20, 38,56, 74, 92: ${Shepherding}`, 20, 50);
    doc.text(`Teaching: 3, 21, 39, 57, 75, 93: ${Teaching}`, 20, 60);
    doc.text(`Wisdom: 4, 22, 40, 58, 76, 94: ${Wisdom}`, 20, 70);
    doc.text(`Knowledge: 5, 23, 41, 59, 77, 95: ${Knowledge}`, 20, 80);
    doc.text(`Creative_Comm: 6, 24, 42, 60, 78, 96: ${Creative_Comm}`, 20, 90);
    doc.text(`Discernment: 7, 25, 43, 61, 79, 97: ${Discernment}`, 20, 100);
    doc.text(`Giving: 8, 26, 44, 62, 80, 98: ${Giving}`, 20, 110);
    doc.text(`Helps: 9, 27, 45, 63, 81, 99: ${Helps}`, 20, 120);
    doc.text(`Mercy: 10, 28, 46, 64, 82, 100: ${Mercy}`, 20, 130);
    doc.text(`Apostleship: 11, 29, 47, 65, 83, 101: ${Apostleship}`, 20, 140);
    doc.text(`Evangelism: 12, 30, 48, 66, 84, 102: ${Evangelism}`, 20, 150);
    doc.text(`Hospitality 13, 31, 49, 67, 85, 103: ${Hospitality}`, 20, 160);
    doc.text(`Faith: 14, 32, 50, 68, 86, 104: ${Faith}`, 20, 170);
    doc.text(`Leadership: 15, 33, 51, 69, 87, 105: ${Leadership}`, 20, 180);
    doc.text(`Administration: 16, 34, 52, 70, 88, 106: ${Administration}`, 20, 190);
    doc.text(`Encouragement: 17, 35, 53, 71, 89, 107: ${Encouragement}`, 20, 200);
    doc.text(`Intercession: 18, 36, 54, 72, 90, 108: ${Intercession}`, 20, 210);

    const gifts = [
      { name: 'Prophecy', score: Prophecy },
      { name: 'Shepherding',score: Shepherding },
    { name: 'Teaching', score: Teaching },
    { name: 'Wisdom', score: Wisdom },
    { name: 'Knowledge', score: Knowledge },
    { name: 'Creative_Comm', score: Creative_Comm },
    { name: 'Discernment', score: Discernment },
    { name: 'Giving', score: Giving },
    { name: 'Helps', score: Helps },
    { name: 'Mercy', score: Mercy },
    { name: 'Apostleship', score: Apostleship },
    { name: 'Evangelism', score: Evangelism },
      { name: 'Hospitality', score: Hospitality },
      { name: 'Faith', score: Faith },
      { name: 'Leadership', score: Leadership },
      { name: 'Administration', score: Administration },
      { name: 'Encouragement', score: Encouragement },
      { name: 'Intercession', score: Intercession },
    ];

      gifts.sort((a, b) => b.score - a.score);

      const primaryGifts = gifts.slice(0,3);
      const secondaryGifts = gifts.slice(3, 6);

      doc.setFontSize(14);
      doc.text('Primary Gifts:', 20, 230);
      primaryGifts.forEach((gift, index) => {
        doc.text(`${index + 1}. ${gift.name}: ${gift.score}`, 20, 240 + index * 10);
      });

      doc.text('Secondary Gifts:', 20, 270);
      secondaryGifts.forEach((gift, index) => {
        doc.text(`${index + 1}. ${gift.name}: ${gift.score}`, 20, 280 + index * 10);
      });

      doc.save('Spiritual_Gift_Assessment_Results.pdf');


    // Save the PDF as a Blob
    const blobPDF = new Blob([doc.output('blob')], { type: 'application/pdf' });

    // Create a FormData object
    const formData = new FormData();
    formData.append('file', blobPDF, 'Spiritual_Gift_Assessment_Results.pdf');

    // Send the survey data and PDF file to a server
    axios.post('http://localhost:3000/survey-results', formData)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
  };



  const model = new Model(surveyJSON);
  model.onComplete.add(onSurveyComplete);
  return <Survey model={model}></Survey>;
}

export default App;