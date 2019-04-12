<template>
  <div id="Manager_content" ref="Manager_content">
  </div>
</template>

<script>

import $script from 'scriptjs'


import mapControl from '../script/common/mapControl.js'
import {ManagerContent,TrackStore} from '../script/modules/common/views/manager_content.js'

import React from 'react';
import {render} from 'react-dom';

export default {
  name: 'vue-trace',
  data() {
    return {
      locations:[{
	"loc_time": 1532034392,
	"latitude": 31.326078796084,
	"longitude": 121.67272296133,
	"create_time": "2018-07-25 14:03:01",
	"direction": 0,
	"height": 1,
	"speed": 4
}, {
	"loc_time": 1532034422,
	"latitude": 31.326083847188,
	"longitude": 121.67273621538,
	"create_time": "2018-07-25 14:03:01",
	"direction": 0,
	"height": 1,
	"speed": 8
}, {
	"loc_time": 1532034452,
	"latitude": 31.326095347713,
	"longitude": 121.67272297807,
	"create_time": "2018-07-25 14:03:01",
	"direction": 0,
	"height": 1,
	"speed": 8
}, {
	"loc_time": 1532034482,
	"latitude": 31.326118788475,
	"longitude": 121.67273138377,
	"create_time": "2018-07-25 14:03:01",
	"direction": 0,
	"height": 0,
	"speed": 7
}, {
	"loc_time": 1532034512,
	"latitude": 31.326118682796,
	"longitude": 121.67272300168,
	"create_time": "2018-07-25 14:03:01",
	"direction": 0,
	"height": 1,
	"speed": 3
}, {
	"loc_time": 1532034542,
	"latitude": 31.32611872371,
	"longitude": 121.67272624636,
	"create_time": "2018-07-25 14:03:01",
	"direction": 0,
	"height": 0,
	"speed": 4
}, {
	"loc_time": 1532034572,
	"latitude": 31.326115678916,
	"longitude": 121.67274300726,
	"create_time": "2018-07-25 14:03:01",
	"direction": 0,
	"height": 0,
	"speed": 13
}, {
	"loc_time": 1532034602,
	"latitude": 31.326089063933,
	"longitude": 121.67274108763,
	"create_time": "2018-07-25 14:03:01",
	"direction": 0,
	"height": 0,
	"speed": 24
}, {
	"loc_time": 1532034633,
	"latitude": 31.325870204197,
	"longitude": 121.67283604346,
	"create_time": "2018-07-25 14:03:01",
	"direction": 0,
	"height": 0,
	"speed": 41
}, {
	"loc_time": 1532034663,
	"latitude": 31.325687906973,
	"longitude": 121.67303541258,
	"create_time": "2018-07-25 14:03:01",
	"direction": 0,
	"height": 0,
	"speed": 33
}, {
	"loc_time": 1532034693,
	"latitude": 31.326197606409,
	"longitude": 121.67358190158,
	"create_time": "2018-07-25 14:03:01",
	"direction": 353,
	"height": 0,
	"speed": 125
}, {
	"loc_time": 1532034723,
	"latitude": 31.326829569649,
	"longitude": 121.67274372936,
	"create_time": "2018-07-25 14:03:01",
	"direction": 309,
	"height": 1,
	"speed": 114
}, {
	"loc_time": 1532034743,
	"latitude": 31.326976206972,
	"longitude": 121.67251756844,
	"create_time": "2018-07-25 14:03:01",
	"direction": 316,
	"height": 2,
	"speed": 4
}, {
	"loc_time": 1532034753,
	"latitude": 31.326980963298,
	"longitude": 121.67250756937,
	"create_time": "2018-07-25 14:03:01",
	"direction": 316,
	"height": 0,
	"speed": 3
}, {
	"loc_time": 1532034783,
	"latitude": 31.32697770724,
	"longitude": 121.67250756608,
	"create_time": "2018-07-25 14:03:01",
	"direction": 316,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532034813,
	"latitude": 31.32697770724,
	"longitude": 121.67250756608,
	"create_time": "2018-07-25 14:03:01",
	"direction": 316,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532034843,
	"latitude": 31.326981028914,
	"longitude": 121.67251270656,
	"create_time": "2018-07-25 14:03:01",
	"direction": 316,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532034873,
	"latitude": 31.326981091058,
	"longitude": 121.67251757338,
	"create_time": "2018-07-25 14:03:01",
	"direction": 316,
	"height": 0,
	"speed": 12
}, {
	"loc_time": 1532034903,
	"latitude": 31.327003662374,
	"longitude": 121.67256410097,
	"create_time": "2018-07-25 14:03:01",
	"direction": 316,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532034933,
	"latitude": 31.327018523997,
	"longitude": 121.67255924919,
	"create_time": "2018-07-25 14:03:01",
	"direction": 316,
	"height": 0,
	"speed": 4
}, {
	"loc_time": 1532034963,
	"latitude": 31.327026911373,
	"longitude": 121.67255736503,
	"create_time": "2018-07-25 14:03:01",
	"direction": 316,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532034993,
	"latitude": 31.327028563507,
	"longitude": 121.67255925934,
	"create_time": "2018-07-25 14:03:01",
	"direction": 316,
	"height": 1,
	"speed": 5
}, {
	"loc_time": 1532035023,
	"latitude": 31.327021714618,
	"longitude": 121.67255411525,
	"create_time": "2018-07-25 14:03:01",
	"direction": 316,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532035053,
	"latitude": 31.327018331074,
	"longitude": 121.67254410788,
	"create_time": "2018-07-25 14:03:01",
	"direction": 316,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532035083,
	"latitude": 31.327340099258,
	"longitude": 121.67175093771,
	"create_time": "2018-07-25 14:03:01",
	"direction": 301,
	"height": 0,
	"speed": 150
}, {
	"loc_time": 1532035113,
	"latitude": 31.328113572259,
	"longitude": 121.67098591072,
	"create_time": "2018-07-25 14:03:01",
	"direction": 316,
	"height": 0,
	"speed": 137
}, {
	"loc_time": 1532035143,
	"latitude": 31.328742671328,
	"longitude": 121.66967061492,
	"create_time": "2018-07-25 14:03:01",
	"direction": 295,
	"height": 0,
	"speed": 182
}, {
	"loc_time": 1532035173,
	"latitude": 31.329488264853,
	"longitude": 121.66810337772,
	"create_time": "2018-07-25 14:03:01",
	"direction": 303,
	"height": 0,
	"speed": 215
}, {
	"loc_time": 1532035203,
	"latitude": 31.330352253935,
	"longitude": 121.66644802406,
	"create_time": "2018-07-25 14:03:01",
	"direction": 292,
	"height": 0,
	"speed": 167
}, {
	"loc_time": 1532035233,
	"latitude": 31.32956232894,
	"longitude": 121.66558942793,
	"create_time": "2018-07-25 14:03:01",
	"direction": 212,
	"height": 0,
	"speed": 137
}, {
	"loc_time": 1532035263,
	"latitude": 31.328880680835,
	"longitude": 121.66507993558,
	"create_time": "2018-07-25 14:03:01",
	"direction": 210,
	"height": 0,
	"speed": 146
}, {
	"loc_time": 1532035293,
	"latitude": 31.328053453613,
	"longitude": 121.66447580679,
	"create_time": "2018-07-25 14:03:01",
	"direction": 209,
	"height": 0,
	"speed": 128
}, {
	"loc_time": 1532035323,
	"latitude": 31.326955478086,
	"longitude": 121.66359331512,
	"create_time": "2018-07-25 14:03:01",
	"direction": 209,
	"height": 0,
	"speed": 31
}, {
	"loc_time": 1532035353,
	"latitude": 31.326959271112,
	"longitude": 121.66351717368,
	"create_time": "2018-07-25 14:03:01",
	"direction": 209,
	"height": 0,
	"speed": 6
}, {
	"loc_time": 1532035383,
	"latitude": 31.326471462257,
	"longitude": 121.66314244171,
	"create_time": "2018-07-25 14:03:01",
	"direction": 218,
	"height": 0,
	"speed": 147
}, {
	"loc_time": 1532035402,
	"latitude": 31.326277860423,
	"longitude": 121.66296944151,
	"create_time": "2018-07-25 14:03:01",
	"direction": 221,
	"height": 0,
	"speed": 1
}, {
	"loc_time": 1532035413,
	"latitude": 31.32628274451,
	"longitude": 121.66296944646,
	"create_time": "2018-07-25 14:03:01",
	"direction": 221,
	"height": 0,
	"speed": 3
}, {
	"loc_time": 1532035443,
	"latitude": 31.326185846802,
	"longitude": 121.66287781718,
	"create_time": "2018-07-25 14:03:01",
	"direction": 219,
	"height": 0,
	"speed": 105
}, {
	"loc_time": 1532035473,
	"latitude": 31.325241808041,
	"longitude": 121.66211574874,
	"create_time": "2018-07-25 14:03:01",
	"direction": 217,
	"height": 0,
	"speed": 173
}, {
	"loc_time": 1532035503,
	"latitude": 31.32440967321,
	"longitude": 121.66112112574,
	"create_time": "2018-07-25 14:03:01",
	"direction": 228,
	"height": 0,
	"speed": 118
}, {
	"loc_time": 1532035533,
	"latitude": 31.324007225324,
	"longitude": 121.6605376013,
	"create_time": "2018-07-25 14:03:01",
	"direction": 242,
	"height": 0,
	"speed": 5
}, {
	"loc_time": 1532035536,
	"latitude": 31.324007255727,
	"longitude": 121.66053922108,
	"create_time": "2018-07-25 14:03:01",
	"direction": 242,
	"height": 0,
	"speed": 3
}, {
	"loc_time": 1532035563,
	"latitude": 31.324006693176,
	"longitude": 121.66050925522,
	"create_time": "2018-07-25 14:03:01",
	"direction": 242,
	"height": 1,
	"speed": 3
}, {
	"loc_time": 1532035593,
	"latitude": 31.324016641431,
	"longitude": 121.66050440601,
	"create_time": "2018-07-25 14:03:01",
	"direction": 242,
	"height": 0,
	"speed": 8
}, {
	"loc_time": 1532035623,
	"latitude": 31.324026838065,
	"longitude": 121.66051278496,
	"create_time": "2018-07-25 14:03:01",
	"direction": 242,
	"height": 0,
	"speed": 3
}, {
	"loc_time": 1532035653,
	"latitude": 31.324041574091,
	"longitude": 121.66050281138,
	"create_time": "2018-07-25 14:03:01",
	"direction": 242,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532035683,
	"latitude": 31.324038409282,
	"longitude": 121.66050766743,
	"create_time": "2018-07-25 14:03:01",
	"direction": 242,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532035713,
	"latitude": 31.324041852876,
	"longitude": 121.66051765932,
	"create_time": "2018-07-25 14:03:01",
	"direction": 242,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532035743,
	"latitude": 31.323654230677,
	"longitude": 121.65990420545,
	"create_time": "2018-07-25 14:03:01",
	"direction": 239,
	"height": 0,
	"speed": 174
}, {
	"loc_time": 1532035773,
	"latitude": 31.323009407286,
	"longitude": 121.65839836702,
	"create_time": "2018-07-25 14:03:01",
	"direction": 253,
	"height": 0,
	"speed": 188
}, {
	"loc_time": 1532035803,
	"latitude": 31.324030633635,
	"longitude": 121.65731804836,
	"create_time": "2018-07-25 14:03:01",
	"direction": 329,
	"height": 0,
	"speed": 213
}, {
	"loc_time": 1532035833,
	"latitude": 31.325451730192,
	"longitude": 121.65629294961,
	"create_time": "2018-07-25 14:03:01",
	"direction": 327,
	"height": 0,
	"speed": 238
}, {
	"loc_time": 1532035863,
	"latitude": 31.326578800503,
	"longitude": 121.65682746906,
	"create_time": "2018-07-25 14:03:01",
	"direction": 42,
	"height": 0,
	"speed": 203
}, {
	"loc_time": 1532035893,
	"latitude": 31.327229062918,
	"longitude": 121.65762711613,
	"create_time": "2018-07-25 14:03:01",
	"direction": 34,
	"height": 0,
	"speed": 43
}, {
	"loc_time": 1532035923,
	"latitude": 31.327800844941,
	"longitude": 121.65746168729,
	"create_time": "2018-07-25 14:03:01",
	"direction": 348,
	"height": 0,
	"speed": 100
}, {
	"loc_time": 1532035953,
	"latitude": 31.327905469584,
	"longitude": 121.6574418181,
	"create_time": "2018-07-25 14:03:01",
	"direction": 349,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532035983,
	"latitude": 31.327906906048,
	"longitude": 121.65743183218,
	"create_time": "2018-07-25 14:03:01",
	"direction": 349,
	"height": 0,
	"speed": 8
}, {
	"loc_time": 1532036013,
	"latitude": 31.328194532029,
	"longitude": 121.65761648389,
	"create_time": "2018-07-25 14:03:01",
	"direction": 89,
	"height": 0,
	"speed": 37
}, {
	"loc_time": 1532036043,
	"latitude": 31.32801106965,
	"longitude": 121.65745866021,
	"create_time": "2018-07-25 14:03:01",
	"direction": 185,
	"height": 0,
	"speed": 80
}, {
	"loc_time": 1532036073,
	"latitude": 31.327770441692,
	"longitude": 121.6574468105,
	"create_time": "2018-07-25 14:03:01",
	"direction": 170,
	"height": 0,
	"speed": 56
}, {
	"loc_time": 1532036103,
	"latitude": 31.32728056431,
	"longitude": 121.65769519059,
	"create_time": "2018-07-25 14:03:01",
	"direction": 128,
	"height": 0,
	"speed": 32
}, {
	"loc_time": 1532036133,
	"latitude": 31.32674605021,
	"longitude": 121.65701685794,
	"create_time": "2018-07-25 14:03:01",
	"direction": 228,
	"height": 0,
	"speed": 142
}, {
	"loc_time": 1532036163,
	"latitude": 31.32644169702,
	"longitude": 121.65649828838,
	"create_time": "2018-07-25 14:03:01",
	"direction": 238,
	"height": 0,
	"speed": 3
}, {
	"loc_time": 1532036193,
	"latitude": 31.326445162214,
	"longitude": 121.65649505276,
	"create_time": "2018-07-25 14:03:01",
	"direction": 238,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532036223,
	"latitude": 31.32644659845,
	"longitude": 121.6564850669,
	"create_time": "2018-07-25 14:03:01",
	"direction": 238,
	"height": 0,
	"speed": 6
}, {
	"loc_time": 1532036253,
	"latitude": 31.326096516466,
	"longitude": 121.65602961393,
	"create_time": "2018-07-25 14:03:01",
	"direction": 247,
	"height": 0,
	"speed": 121
}, {
	"loc_time": 1532036283,
	"latitude": 31.326608035807,
	"longitude": 121.65519794111,
	"create_time": "2018-07-25 14:03:01",
	"direction": 314,
	"height": 0,
	"speed": 140
}, {
	"loc_time": 1532036313,
	"latitude": 31.327540640406,
	"longitude": 121.65424871928,
	"create_time": "2018-07-25 14:03:01",
	"direction": 321,
	"height": 0,
	"speed": 173
}, {
	"loc_time": 1532036343,
	"latitude": 31.328470910594,
	"longitude": 121.65309862246,
	"create_time": "2018-07-25 14:03:01",
	"direction": 312,
	"height": 0,
	"speed": 148
}, {
	"loc_time": 1532036373,
	"latitude": 31.329273135959,
	"longitude": 121.65195156974,
	"create_time": "2018-07-25 14:03:01",
	"direction": 308,
	"height": 0,
	"speed": 216
}, {
	"loc_time": 1532036403,
	"latitude": 31.330372311527,
	"longitude": 121.65028822674,
	"create_time": "2018-07-25 14:03:01",
	"direction": 307,
	"height": 0,
	"speed": 245
}, {
	"loc_time": 1532036433,
	"latitude": 31.331140384047,
	"longitude": 121.64913764827,
	"create_time": "2018-07-25 14:03:01",
	"direction": 310,
	"height": 0,
	"speed": 5
}, {
	"loc_time": 1532036440,
	"latitude": 31.331143817633,
	"longitude": 121.64914764262,
	"create_time": "2018-07-25 14:03:01",
	"direction": 310,
	"height": 0,
	"speed": 8
}, {
	"loc_time": 1532036463,
	"latitude": 31.331168511776,
	"longitude": 121.64913254522,
	"create_time": "2018-07-25 14:03:01",
	"direction": 310,
	"height": 0,
	"speed": 2
}, {
	"loc_time": 1532036493,
	"latitude": 31.331192851154,
	"longitude": 121.6490974654,
	"create_time": "2018-07-25 14:03:01",
	"direction": 310,
	"height": 0,
	"speed": 40
}, {
	"loc_time": 1532036523,
	"latitude": 31.331559689098,
	"longitude": 121.64857476421,
	"create_time": "2018-07-25 14:03:01",
	"direction": 306,
	"height": 0,
	"speed": 135
}, {
	"loc_time": 1532036545,
	"latitude": 31.33178648257,
	"longitude": 121.64823094334,
	"create_time": "2018-07-25 14:03:01",
	"direction": 304,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532036553,
	"latitude": 31.331793181356,
	"longitude": 121.64822608887,
	"create_time": "2018-07-25 14:03:01",
	"direction": 304,
	"height": 0,
	"speed": 39
}, {
	"loc_time": 1532036583,
	"latitude": 31.332175998455,
	"longitude": 121.64764312467,
	"create_time": "2018-07-25 14:03:01",
	"direction": 310,
	"height": 0,
	"speed": 40
}, {
	"loc_time": 1532036610,
	"latitude": 31.332269762502,
	"longitude": 121.64749359416,
	"create_time": "2018-07-25 14:03:01",
	"direction": 306,
	"height": 0,
	"speed": 19
}, {
	"loc_time": 1532036613,
	"latitude": 31.332263084506,
	"longitude": 121.64748386505,
	"create_time": "2018-07-25 14:03:01",
	"direction": 306,
	"height": 0,
	"speed": 16
}, {
	"loc_time": 1532036643,
	"latitude": 31.33227415289,
	"longitude": 121.64744876574,
	"create_time": "2018-07-25 14:03:01",
	"direction": 306,
	"height": 0,
	"speed": 3
}, {
	"loc_time": 1532036673,
	"latitude": 31.332272524885,
	"longitude": 121.64744876418,
	"create_time": "2018-07-25 14:03:01",
	"direction": 306,
	"height": 0,
	"speed": 2
}, {
	"loc_time": 1532036703,
	"latitude": 31.33231198746,
	"longitude": 121.64742395487,
	"create_time": "2018-07-25 14:03:01",
	"direction": 306,
	"height": 0,
	"speed": 12
}, {
	"loc_time": 1532036733,
	"latitude": 31.332336444156,
	"longitude": 121.64739426969,
	"create_time": "2018-07-25 14:03:01",
	"direction": 306,
	"height": 0,
	"speed": 2
}, {
	"loc_time": 1532036763,
	"latitude": 31.332348139117,
	"longitude": 121.64739590135,
	"create_time": "2018-07-25 14:03:01",
	"direction": 306,
	"height": 0,
	"speed": 5
}, {
	"loc_time": 1532036793,
	"latitude": 31.332497078477,
	"longitude": 121.64715485999,
	"create_time": "2018-07-25 14:03:01",
	"direction": 303,
	"height": 0,
	"speed": 62
}, {
	"loc_time": 1532036823,
	"latitude": 31.333209947974,
	"longitude": 121.64618370408,
	"create_time": "2018-07-25 14:03:01",
	"direction": 313,
	"height": 0,
	"speed": 54
}, {
	"loc_time": 1532036835,
	"latitude": 31.333219139479,
	"longitude": 121.64614859699,
	"create_time": "2018-07-25 14:03:01",
	"direction": 313,
	"height": 0,
	"speed": 5
}, {
	"loc_time": 1532036853,
	"latitude": 31.333259972756,
	"longitude": 121.64609055897,
	"create_time": "2018-07-25 14:03:01",
	"direction": 313,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532036883,
	"latitude": 31.333258397846,
	"longitude": 121.64609379898,
	"create_time": "2018-07-25 14:03:01",
	"direction": 313,
	"height": 0,
	"speed": 6
}, {
	"loc_time": 1532036913,
	"latitude": 31.333263228751,
	"longitude": 121.64609056203,
	"create_time": "2018-07-25 14:03:01",
	"direction": 313,
	"height": 0,
	"speed": 33
}, {
	"loc_time": 1532036943,
	"latitude": 31.333716978623,
	"longitude": 121.64544292999,
	"create_time": "2018-07-25 14:03:01",
	"direction": 303,
	"height": 0,
	"speed": 5
}, {
	"loc_time": 1532036948,
	"latitude": 31.333712417928,
	"longitude": 121.64544616752,
	"create_time": "2018-07-25 14:03:01",
	"direction": 303,
	"height": 0,
	"speed": 15
}, {
	"loc_time": 1532036973,
	"latitude": 31.333943071,
	"longitude": 121.645107067,
	"create_time": "2018-07-25 14:03:01",
	"direction": 308,
	"height": 0,
	"speed": 95
}, {
	"loc_time": 1532036998,
	"latitude": 31.334218635028,
	"longitude": 121.6446337112,
	"create_time": "2018-07-25 14:03:01",
	"direction": 309,
	"height": 0,
	"speed": 23
}, {
	"loc_time": 1532037004,
	"latitude": 31.334242053397,
	"longitude": 121.64453430547,
	"create_time": "2018-07-25 14:03:01",
	"direction": 287,
	"height": 0,
	"speed": 104
}, {
	"loc_time": 1532037034,
	"latitude": 31.333891212086,
	"longitude": 121.64389523354,
	"create_time": "2018-07-25 14:03:01",
	"direction": 209,
	"height": 0,
	"speed": 99
}, {
	"loc_time": 1532037064,
	"latitude": 31.333629583087,
	"longitude": 121.64371043323,
	"create_time": "2018-07-25 14:03:01",
	"direction": 209,
	"height": 0,
	"speed": 42
}, {
	"loc_time": 1532037094,
	"latitude": 31.333577038087,
	"longitude": 121.64366228495,
	"create_time": "2018-07-25 14:03:01",
	"direction": 209,
	"height": 0,
	"speed": 6
}, {
	"loc_time": 1532037124,
	"latitude": 31.333384978733,
	"longitude": 121.64353780214,
	"create_time": "2018-07-25 14:03:04",
	"direction": 209,
	"height": 0,
	"speed": 52
}, {
	"loc_time": 1532037154,
	"latitude": 31.333177677771,
	"longitude": 121.64339114256,
	"create_time": "2018-07-25 14:03:04",
	"direction": 218,
	"height": 0,
	"speed": 25
}, {
	"loc_time": 1532037184,
	"latitude": 31.332147227789,
	"longitude": 121.64266832454,
	"create_time": "2018-07-25 14:03:04",
	"direction": 210,
	"height": 0,
	"speed": 207
}, {
	"loc_time": 1532037214,
	"latitude": 31.330951542059,
	"longitude": 121.64180251537,
	"create_time": "2018-07-25 14:03:04",
	"direction": 220,
	"height": 0,
	"speed": 88
}, {
	"loc_time": 1532037244,
	"latitude": 31.330223841077,
	"longitude": 121.64132279196,
	"create_time": "2018-07-25 14:03:04",
	"direction": 214,
	"height": 0,
	"speed": 127
}, {
	"loc_time": 1532037274,
	"latitude": 31.329087206574,
	"longitude": 121.64044841579,
	"create_time": "2018-07-25 14:03:04",
	"direction": 221,
	"height": 0,
	"speed": 197
}, {
	"loc_time": 1532037304,
	"latitude": 31.329088005145,
	"longitude": 121.63913772709,
	"create_time": "2018-07-25 14:03:04",
	"direction": 309,
	"height": 0,
	"speed": 180
}, {
	"loc_time": 1532037334,
	"latitude": 31.330499039409,
	"longitude": 121.63750046956,
	"create_time": "2018-07-25 14:03:04",
	"direction": 313,
	"height": 0,
	"speed": 274
}, {
	"loc_time": 1532037364,
	"latitude": 31.332019219536,
	"longitude": 121.63555145391,
	"create_time": "2018-07-25 14:03:04",
	"direction": 312,
	"height": 0,
	"speed": 307
}, {
	"loc_time": 1532037394,
	"latitude": 31.333799048337,
	"longitude": 121.63349885763,
	"create_time": "2018-07-25 14:03:04",
	"direction": 312,
	"height": 0,
	"speed": 366
}, {
	"loc_time": 1532037424,
	"latitude": 31.335777829205,
	"longitude": 121.63113701086,
	"create_time": "2018-07-25 14:03:04",
	"direction": 314,
	"height": 0,
	"speed": 384
}, {
	"loc_time": 1532037454,
	"latitude": 31.337920385924,
	"longitude": 121.62859918351,
	"create_time": "2018-07-25 14:03:04",
	"direction": 313,
	"height": 0,
	"speed": 425
}, {
	"loc_time": 1532037484,
	"latitude": 31.340126133033,
	"longitude": 121.62589464051,
	"create_time": "2018-07-25 14:03:04",
	"direction": 311,
	"height": 0,
	"speed": 435
}, {
	"loc_time": 1532037514,
	"latitude": 31.342276556693,
	"longitude": 121.62300825423,
	"create_time": "2018-07-25 14:03:04",
	"direction": 310,
	"height": 0,
	"speed": 419
}, {
	"loc_time": 1532037544,
	"latitude": 31.343855699756,
	"longitude": 121.62091745685,
	"create_time": "2018-07-25 14:03:04",
	"direction": 315,
	"height": 0,
	"speed": 306
}, {
	"loc_time": 1532037574,
	"latitude": 31.345820067765,
	"longitude": 121.61828177186,
	"create_time": "2018-07-25 14:03:04",
	"direction": 312,
	"height": 0,
	"speed": 501
}, {
	"loc_time": 1532037604,
	"latitude": 31.348299673975,
	"longitude": 121.61514971604,
	"create_time": "2018-07-25 14:03:04",
	"direction": 316,
	"height": 0,
	"speed": 460
}, {
	"loc_time": 1532037634,
	"latitude": 31.350790446887,
	"longitude": 121.61243717021,
	"create_time": "2018-07-25 14:03:04",
	"direction": 319,
	"height": 0,
	"speed": 439
}, {
	"loc_time": 1532037664,
	"latitude": 31.353158557498,
	"longitude": 121.60949771022,
	"create_time": "2018-07-25 14:03:04",
	"direction": 307,
	"height": 0,
	"speed": 472
}, {
	"loc_time": 1532037694,
	"latitude": 31.355346273394,
	"longitude": 121.60622067082,
	"create_time": "2018-07-25 14:03:04",
	"direction": 307,
	"height": 0,
	"speed": 470
}, {
	"loc_time": 1532037724,
	"latitude": 31.357542742628,
	"longitude": 121.60291889527,
	"create_time": "2018-07-25 14:03:04",
	"direction": 301,
	"height": 0,
	"speed": 479
}, {
	"loc_time": 1532037754,
	"latitude": 31.359283740496,
	"longitude": 121.59918154805,
	"create_time": "2018-07-25 14:03:04",
	"direction": 293,
	"height": 0,
	"speed": 481
}, {
	"loc_time": 1532037784,
	"latitude": 31.360338683056,
	"longitude": 121.59558820781,
	"create_time": "2018-07-25 14:03:04",
	"direction": 288,
	"height": 0,
	"speed": 427
}, {
	"loc_time": 1532037814,
	"latitude": 31.361389713245,
	"longitude": 121.59193746518,
	"create_time": "2018-07-25 14:03:04",
	"direction": 290,
	"height": 0,
	"speed": 444
}, {
	"loc_time": 1532037844,
	"latitude": 31.362932568097,
	"longitude": 121.58816550742,
	"create_time": "2018-07-25 14:03:04",
	"direction": 298,
	"height": 0,
	"speed": 503
}, {
	"loc_time": 1532037874,
	"latitude": 31.364908195519,
	"longitude": 121.58429727732,
	"create_time": "2018-07-25 14:03:04",
	"direction": 299,
	"height": 0,
	"speed": 506
}, {
	"loc_time": 1532037904,
	"latitude": 31.366348006614,
	"longitude": 121.58085082833,
	"create_time": "2018-07-25 14:03:04",
	"direction": 294,
	"height": 0,
	"speed": 339
}, {
	"loc_time": 1532037934,
	"latitude": 31.367524775137,
	"longitude": 121.5775407384,
	"create_time": "2018-07-25 14:03:04",
	"direction": 292,
	"height": 0,
	"speed": 515
}, {
	"loc_time": 1532037964,
	"latitude": 31.369056561874,
	"longitude": 121.57346358937,
	"create_time": "2018-07-25 14:03:04",
	"direction": 292,
	"height": 0,
	"speed": 474
}, {
	"loc_time": 1532037994,
	"latitude": 31.370345301856,
	"longitude": 121.57000377457,
	"create_time": "2018-07-25 14:03:04",
	"direction": 292,
	"height": 0,
	"speed": 279
}, {
	"loc_time": 1532038024,
	"latitude": 31.370801140285,
	"longitude": 121.56873541316,
	"create_time": "2018-07-25 14:03:04",
	"direction": 300,
	"height": 0,
	"speed": 40
}, {
	"loc_time": 1532038054,
	"latitude": 31.370923962834,
	"longitude": 121.56850570527,
	"create_time": "2018-07-25 14:03:04",
	"direction": 290,
	"height": 0,
	"speed": 71
}, {
	"loc_time": 1532038084,
	"latitude": 31.371335669476,
	"longitude": 121.56746224174,
	"create_time": "2018-07-25 14:03:04",
	"direction": 296,
	"height": 0,
	"speed": 169
}, {
	"loc_time": 1532038114,
	"latitude": 31.371768251392,
	"longitude": 121.56630944529,
	"create_time": "2018-07-25 14:03:04",
	"direction": 298,
	"height": 0,
	"speed": 3
}, {
	"loc_time": 1532038144,
	"latitude": 31.371914000821,
	"longitude": 121.56583710333,
	"create_time": "2018-07-25 14:03:04",
	"direction": 284,
	"height": 0,
	"speed": 17
}, {
	"loc_time": 1532038152,
	"latitude": 31.371914000026,
	"longitude": 121.56583574719,
	"create_time": "2018-07-25 14:03:04",
	"direction": 284,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532038174,
	"latitude": 31.371904215131,
	"longitude": 121.56580076635,
	"create_time": "2018-07-25 14:03:04",
	"direction": 284,
	"height": 0,
	"speed": 6
}, {
	"loc_time": 1532038204,
	"latitude": 31.371960605654,
	"longitude": 121.5657657368,
	"create_time": "2018-07-25 14:03:04",
	"direction": 284,
	"height": 0,
	"speed": 25
}, {
	"loc_time": 1532038234,
	"latitude": 31.371964169001,
	"longitude": 121.56582567463,
	"create_time": "2018-07-25 14:03:04",
	"direction": 284,
	"height": 0,
	"speed": 11
}, {
	"loc_time": 1532038264,
	"latitude": 31.372149809891,
	"longitude": 121.56533491942,
	"create_time": "2018-07-25 14:03:04",
	"direction": 294,
	"height": 0,
	"speed": 85
}, {
	"loc_time": 1532038294,
	"latitude": 31.37231646489,
	"longitude": 121.56482444468,
	"create_time": "2018-07-25 14:03:04",
	"direction": 297,
	"height": 0,
	"speed": 109
}, {
	"loc_time": 1532038324,
	"latitude": 31.372599881371,
	"longitude": 121.56401003212,
	"create_time": "2018-07-25 14:03:04",
	"direction": 295,
	"height": 0,
	"speed": 131
}, {
	"loc_time": 1532038354,
	"latitude": 31.373139386833,
	"longitude": 121.56241641333,
	"create_time": "2018-07-25 14:03:04",
	"direction": 294,
	"height": 0,
	"speed": 203
}, {
	"loc_time": 1532038384,
	"latitude": 31.373822426412,
	"longitude": 121.56046196733,
	"create_time": "2018-07-25 14:03:04",
	"direction": 293,
	"height": 0,
	"speed": 264
}, {
	"loc_time": 1532038414,
	"latitude": 31.374687230198,
	"longitude": 121.55801694278,
	"create_time": "2018-07-25 14:03:04",
	"direction": 293,
	"height": 0,
	"speed": 349
}, {
	"loc_time": 1532038444,
	"latitude": 31.375431954196,
	"longitude": 121.55606284223,
	"create_time": "2018-07-25 14:03:04",
	"direction": 293,
	"height": 0,
	"speed": 107
}, {
	"loc_time": 1532038474,
	"latitude": 31.375519953279,
	"longitude": 121.55577758524,
	"create_time": "2018-07-25 14:03:04",
	"direction": 286,
	"height": 0,
	"speed": 43
}, {
	"loc_time": 1532038481,
	"latitude": 31.375519953279,
	"longitude": 121.55577758524,
	"create_time": "2018-07-25 14:03:04",
	"direction": 286,
	"height": 1,
	"speed": 43
}, {
	"loc_time": 1532038511,
	"latitude": 31.37571431963,
	"longitude": 121.55511783441,
	"create_time": "2018-07-25 14:03:04",
	"direction": 249,
	"height": 5,
	"speed": 120
}, {
	"loc_time": 1532038541,
	"latitude": 31.375994159896,
	"longitude": 121.5544943465,
	"create_time": "2018-07-25 14:03:04",
	"direction": 283,
	"height": 0,
	"speed": 152
}, {
	"loc_time": 1532038571,
	"latitude": 31.376049294556,
	"longitude": 121.55379324514,
	"create_time": "2018-07-25 14:03:04",
	"direction": 264,
	"height": 1,
	"speed": 30
}, {
	"loc_time": 1532038601,
	"latitude": 31.376303089224,
	"longitude": 121.55315696833,
	"create_time": "2018-07-25 14:03:04",
	"direction": 307,
	"height": 1,
	"speed": 106
}, {
	"loc_time": 1532038631,
	"latitude": 31.377060724389,
	"longitude": 121.55120832677,
	"create_time": "2018-07-25 14:03:04",
	"direction": 293,
	"height": 1,
	"speed": 279
}, {
	"loc_time": 1532038661,
	"latitude": 31.377940887632,
	"longitude": 121.54861200903,
	"create_time": "2018-07-25 14:03:04",
	"direction": 288,
	"height": 0,
	"speed": 329
}, {
	"loc_time": 1532038691,
	"latitude": 31.378609090689,
	"longitude": 121.54590913934,
	"create_time": "2018-07-25 14:03:04",
	"direction": 281,
	"height": 0,
	"speed": 289
}, {
	"loc_time": 1532038721,
	"latitude": 31.378854470825,
	"longitude": 121.54434763164,
	"create_time": "2018-07-25 14:03:04",
	"direction": 281,
	"height": 0,
	"speed": 92
}, {
	"loc_time": 1532038751,
	"latitude": 31.379088969509,
	"longitude": 121.54397340196,
	"create_time": "2018-07-25 14:03:04",
	"direction": 297,
	"height": 0,
	"speed": 8
}, {
	"loc_time": 1532038753,
	"latitude": 31.379083993699,
	"longitude": 121.54398339805,
	"create_time": "2018-07-25 14:03:04",
	"direction": 297,
	"height": 0,
	"speed": 5
}, {
	"loc_time": 1532038781,
	"latitude": 31.379032594041,
	"longitude": 121.54389892542,
	"create_time": "2018-07-25 14:03:04",
	"direction": 297,
	"height": 0,
	"speed": 21
}, {
	"loc_time": 1532038811,
	"latitude": 31.378976756393,
	"longitude": 121.5438395707,
	"create_time": "2018-07-25 14:03:04",
	"direction": 297,
	"height": 0,
	"speed": 3
}, {
	"loc_time": 1532038841,
	"latitude": 31.3790359625,
	"longitude": 121.54344905385,
	"create_time": "2018-07-25 14:03:04",
	"direction": 278,
	"height": 0,
	"speed": 33
}, {
	"loc_time": 1532038871,
	"latitude": 31.379123110182,
	"longitude": 121.54283711538,
	"create_time": "2018-07-25 14:03:04",
	"direction": 275,
	"height": 0,
	"speed": 34
}, {
	"loc_time": 1532038901,
	"latitude": 31.379253595427,
	"longitude": 121.54234747578,
	"create_time": "2018-07-25 14:03:04",
	"direction": 283,
	"height": 1,
	"speed": 90
}, {
	"loc_time": 1532038931,
	"latitude": 31.379212839172,
	"longitude": 121.54156211392,
	"create_time": "2018-07-25 14:03:04",
	"direction": 259,
	"height": 0,
	"speed": 91
}, {
	"loc_time": 1532038961,
	"latitude": 31.37943227505,
	"longitude": 121.54037159769,
	"create_time": "2018-07-25 14:03:04",
	"direction": 285,
	"height": 0,
	"speed": 168
}, {
	"loc_time": 1532038991,
	"latitude": 31.379652812443,
	"longitude": 121.53876948493,
	"create_time": "2018-07-25 14:03:04",
	"direction": 269,
	"height": 0,
	"speed": 34
}, {
	"loc_time": 1532039000,
	"latitude": 31.379657387905,
	"longitude": 121.53872493967,
	"create_time": "2018-07-25 14:03:04",
	"direction": 269,
	"height": 0,
	"speed": 10
}, {
	"loc_time": 1532039021,
	"latitude": 31.379637319081,
	"longitude": 121.5387249589,
	"create_time": "2018-07-25 14:03:04",
	"direction": 269,
	"height": 0,
	"speed": 15
}, {
	"loc_time": 1532039051,
	"latitude": 31.379836242897,
	"longitude": 121.53783720063,
	"create_time": "2018-07-25 14:03:04",
	"direction": 285,
	"height": 0,
	"speed": 85
}, {
	"loc_time": 1532039081,
	"latitude": 31.380021721619,
	"longitude": 121.53666144755,
	"create_time": "2018-07-25 14:03:04",
	"direction": 280,
	"height": 0,
	"speed": 167
}, {
	"loc_time": 1532039100,
	"latitude": 31.380033825541,
	"longitude": 121.53617555189,
	"create_time": "2018-07-25 14:03:04",
	"direction": 274,
	"height": 0,
	"speed": 18
}, {
	"loc_time": 1532039111,
	"latitude": 31.380017894759,
	"longitude": 121.53612265986,
	"create_time": "2018-07-25 14:03:04",
	"direction": 274,
	"height": 0,
	"speed": 11
}, {
	"loc_time": 1532039141,
	"latitude": 31.380116117797,
	"longitude": 121.5353043867,
	"create_time": "2018-07-25 14:03:04",
	"direction": 281,
	"height": 0,
	"speed": 104
}, {
	"loc_time": 1532039171,
	"latitude": 31.380190765362,
	"longitude": 121.53445643145,
	"create_time": "2018-07-25 14:03:04",
	"direction": 275,
	"height": 0,
	"speed": 65
}, {
	"loc_time": 1532039201,
	"latitude": 31.380291567226,
	"longitude": 121.53358197545,
	"create_time": "2018-07-25 14:03:04",
	"direction": 278,
	"height": 0,
	"speed": 110
}, {
	"loc_time": 1532039231,
	"latitude": 31.380440613852,
	"longitude": 121.53249741037,
	"create_time": "2018-07-25 14:03:04",
	"direction": 289,
	"height": 0,
	"speed": 115
}, {
	"loc_time": 1532039261,
	"latitude": 31.380490489846,
	"longitude": 121.53226438055,
	"create_time": "2018-07-25 14:03:04",
	"direction": 280,
	"height": 0,
	"speed": 14
}, {
	"loc_time": 1532039291,
	"latitude": 31.380536822891,
	"longitude": 121.53204430969,
	"create_time": "2018-07-25 14:03:04",
	"direction": 277,
	"height": 0,
	"speed": 55
}, {
	"loc_time": 1532039321,
	"latitude": 31.380735579848,
	"longitude": 121.53100279851,
	"create_time": "2018-07-25 14:03:04",
	"direction": 279,
	"height": 0,
	"speed": 21
}, {
	"loc_time": 1532039351,
	"latitude": 31.380895562138,
	"longitude": 121.53022909485,
	"create_time": "2018-07-25 14:03:04",
	"direction": 294,
	"height": 0,
	"speed": 102
}, {
	"loc_time": 1532039381,
	"latitude": 31.38095865093,
	"longitude": 121.52922726095,
	"create_time": "2018-07-25 14:03:04",
	"direction": 272,
	"height": 0,
	"speed": 3
}, {
	"loc_time": 1532039411,
	"latitude": 31.380920246213,
	"longitude": 121.52900397969,
	"create_time": "2018-07-25 14:03:04",
	"direction": 272,
	"height": 0,
	"speed": 40
}, {
	"loc_time": 1532039441,
	"latitude": 31.381091524212,
	"longitude": 121.52794223405,
	"create_time": "2018-07-25 14:03:04",
	"direction": 280,
	"height": 0,
	"speed": 183
}, {
	"loc_time": 1532039471,
	"latitude": 31.381242728542,
	"longitude": 121.52636122603,
	"create_time": "2018-07-25 14:03:04",
	"direction": 273,
	"height": 0,
	"speed": 107
}, {
	"loc_time": 1532039501,
	"latitude": 31.381355906879,
	"longitude": 121.52548317022,
	"create_time": "2018-07-25 14:03:04",
	"direction": 283,
	"height": 0,
	"speed": 102
}, {
	"loc_time": 1532039531,
	"latitude": 31.381446431771,
	"longitude": 121.52433996731,
	"create_time": "2018-07-25 14:03:04",
	"direction": 280,
	"height": 0,
	"speed": 69
}, {
	"loc_time": 1532039561,
	"latitude": 31.381574768868,
	"longitude": 121.52337218391,
	"create_time": "2018-07-25 14:03:04",
	"direction": 282,
	"height": 0,
	"speed": 129
}, {
	"loc_time": 1532039591,
	"latitude": 31.381719216522,
	"longitude": 121.52186309282,
	"create_time": "2018-07-25 14:03:04",
	"direction": 274,
	"height": 0,
	"speed": 110
}, {
	"loc_time": 1532039621,
	"latitude": 31.381702388117,
	"longitude": 121.52086989543,
	"create_time": "2018-07-25 14:03:04",
	"direction": 263,
	"height": 0,
	"speed": 115
}, {
	"loc_time": 1532039651,
	"latitude": 31.381844122788,
	"longitude": 121.51983200605,
	"create_time": "2018-07-25 14:03:04",
	"direction": 283,
	"height": 0,
	"speed": 88
}, {
	"loc_time": 1532039681,
	"latitude": 31.381907412063,
	"longitude": 121.5190917612,
	"create_time": "2018-07-25 14:03:04",
	"direction": 271,
	"height": 0,
	"speed": 17
}, {
	"loc_time": 1532039688,
	"latitude": 31.381877060659,
	"longitude": 121.51904716588,
	"create_time": "2018-07-25 14:03:04",
	"direction": 271,
	"height": 0,
	"speed": 35
}, {
	"loc_time": 1532039711,
	"latitude": 31.381884026778,
	"longitude": 121.51870934472,
	"create_time": "2018-07-25 14:03:04",
	"direction": 273,
	"height": 0,
	"speed": 61
}, {
	"loc_time": 1532039742,
	"latitude": 31.381853826012,
	"longitude": 121.51823899157,
	"create_time": "2018-07-25 14:03:04",
	"direction": 262,
	"height": 0,
	"speed": 27
}, {
	"loc_time": 1532039772,
	"latitude": 31.381853826012,
	"longitude": 121.51823899157,
	"create_time": "2018-07-25 14:03:04",
	"direction": 262,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532039802,
	"latitude": 31.381853826012,
	"longitude": 121.51823899157,
	"create_time": "2018-07-25 14:03:04",
	"direction": 262,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532039832,
	"latitude": 31.381853826012,
	"longitude": 121.51823899157,
	"create_time": "2018-07-25 14:03:04",
	"direction": 262,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532039862,
	"latitude": 31.381853826012,
	"longitude": 121.51823899157,
	"create_time": "2018-07-25 14:03:04",
	"direction": 262,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532039892,
	"latitude": 31.381853826012,
	"longitude": 121.51823899157,
	"create_time": "2018-07-25 14:03:04",
	"direction": 262,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532039922,
	"latitude": 31.381853826012,
	"longitude": 121.51823899157,
	"create_time": "2018-07-25 14:03:04",
	"direction": 262,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532039952,
	"latitude": 31.381853826012,
	"longitude": 121.51823899157,
	"create_time": "2018-07-25 14:03:07",
	"direction": 262,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532039981,
	"latitude": 31.381853826012,
	"longitude": 121.51823899157,
	"create_time": "2018-07-25 14:03:07",
	"direction": 262,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532040012,
	"latitude": 31.381853826012,
	"longitude": 121.51823899157,
	"create_time": "2018-07-25 14:03:07",
	"direction": 262,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532040042,
	"latitude": 31.381853826012,
	"longitude": 121.51823899157,
	"create_time": "2018-07-25 14:03:07",
	"direction": 262,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532040072,
	"latitude": 31.381853826012,
	"longitude": 121.51823899157,
	"create_time": "2018-07-25 14:03:07",
	"direction": 262,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532040102,
	"latitude": 31.381853826012,
	"longitude": 121.51823899157,
	"create_time": "2018-07-25 14:03:07",
	"direction": 262,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532040132,
	"latitude": 31.381853826012,
	"longitude": 121.51823899157,
	"create_time": "2018-07-25 14:03:07",
	"direction": 262,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532040155,
	"latitude": 31.381853826012,
	"longitude": 121.51823899157,
	"create_time": "2018-07-25 14:03:07",
	"direction": 262,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532040185,
	"latitude": 31.381853826012,
	"longitude": 121.51823899157,
	"create_time": "2018-07-25 14:03:07",
	"direction": 262,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532040201,
	"latitude": 31.381853826012,
	"longitude": 121.51823899157,
	"create_time": "2018-07-25 14:03:07",
	"direction": 262,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532040231,
	"latitude": 31.378547741175,
	"longitude": 121.49789611474,
	"create_time": "2018-07-25 14:03:07",
	"direction": 238,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532040242,
	"latitude": 31.378547741175,
	"longitude": 121.49789611474,
	"create_time": "2018-07-25 14:03:07",
	"direction": 238,
	"height": 2,
	"speed": 0
}, {
	"loc_time": 1532040272,
	"latitude": 31.376314343382,
	"longitude": 121.49133372535,
	"create_time": "2018-07-25 14:03:07",
	"direction": 251,
	"height": 0,
	"speed": 418
}, {
	"loc_time": 1532040302,
	"latitude": 31.375429812513,
	"longitude": 121.48779621948,
	"create_time": "2018-07-25 14:03:07",
	"direction": 252,
	"height": 1,
	"speed": 436
}, {
	"loc_time": 1532040332,
	"latitude": 31.374511099079,
	"longitude": 121.48420000009,
	"create_time": "2018-07-25 14:03:07",
	"direction": 252,
	"height": 0,
	"speed": 438
}, {
	"loc_time": 1532040362,
	"latitude": 31.3735624251,
	"longitude": 121.4804536708,
	"create_time": "2018-07-25 14:03:07",
	"direction": 251,
	"height": 0,
	"speed": 453
}, {
	"loc_time": 1532040392,
	"latitude": 31.372637550793,
	"longitude": 121.47677253279,
	"create_time": "2018-07-25 14:03:07",
	"direction": 251,
	"height": 0,
	"speed": 434
}, {
	"loc_time": 1532040422,
	"latitude": 31.371656769734,
	"longitude": 121.47298614162,
	"create_time": "2018-07-25 14:03:07",
	"direction": 251,
	"height": 0,
	"speed": 494
}, {
	"loc_time": 1532040452,
	"latitude": 31.370585250414,
	"longitude": 121.4689996064,
	"create_time": "2018-07-25 14:03:07",
	"direction": 250,
	"height": 0,
	"speed": 470
}, {
	"loc_time": 1532040482,
	"latitude": 31.369430331607,
	"longitude": 121.4647430717,
	"create_time": "2018-07-25 14:03:07",
	"direction": 250,
	"height": 0,
	"speed": 488
}, {
	"loc_time": 1532040512,
	"latitude": 31.368218945903,
	"longitude": 121.46051392916,
	"create_time": "2018-07-25 14:03:07",
	"direction": 251,
	"height": 0,
	"speed": 510
}, {
	"loc_time": 1532040542,
	"latitude": 31.367047795777,
	"longitude": 121.45641206885,
	"create_time": "2018-07-25 14:03:07",
	"direction": 250,
	"height": 0,
	"speed": 490
}, {
	"loc_time": 1532040572,
	"latitude": 31.36574097585,
	"longitude": 121.45231012435,
	"create_time": "2018-07-25 14:03:07",
	"direction": 247,
	"height": 1,
	"speed": 516
}, {
	"loc_time": 1532040603,
	"latitude": 31.364317295185,
	"longitude": 121.44837942442,
	"create_time": "2018-07-25 14:03:07",
	"direction": 247,
	"height": 0,
	"speed": 472
}, {
	"loc_time": 1532040633,
	"latitude": 31.363081351112,
	"longitude": 121.4450205555,
	"create_time": "2018-07-25 14:03:07",
	"direction": 248,
	"height": 1,
	"speed": 408
}, {
	"loc_time": 1532040663,
	"latitude": 31.36197577475,
	"longitude": 121.4418416608,
	"create_time": "2018-07-25 14:03:07",
	"direction": 248,
	"height": 1,
	"speed": 377
}, {
	"loc_time": 1532040693,
	"latitude": 31.361010797807,
	"longitude": 121.43875589664,
	"create_time": "2018-07-25 14:03:07",
	"direction": 250,
	"height": 0,
	"speed": 435
}, {
	"loc_time": 1532040723,
	"latitude": 31.360017920261,
	"longitude": 121.43511423315,
	"create_time": "2018-07-25 14:03:07",
	"direction": 253,
	"height": 0,
	"speed": 424
}, {
	"loc_time": 1532040753,
	"latitude": 31.359181549008,
	"longitude": 121.43122745464,
	"create_time": "2018-07-25 14:03:07",
	"direction": 258,
	"height": 0,
	"speed": 482
}, {
	"loc_time": 1532040783,
	"latitude": 31.35852304612,
	"longitude": 121.42777883354,
	"create_time": "2018-07-25 14:03:07",
	"direction": 261,
	"height": 1,
	"speed": 341
}, {
	"loc_time": 1532040813,
	"latitude": 31.357863377955,
	"longitude": 121.42412047104,
	"create_time": "2018-07-25 14:03:07",
	"direction": 258,
	"height": 0,
	"speed": 489
}, {
	"loc_time": 1532040843,
	"latitude": 31.356990459153,
	"longitude": 121.42035006848,
	"create_time": "2018-07-25 14:03:07",
	"direction": 252,
	"height": 1,
	"speed": 446
}, {
	"loc_time": 1532040873,
	"latitude": 31.355834663877,
	"longitude": 121.41659116587,
	"create_time": "2018-07-25 14:03:07",
	"direction": 251,
	"height": 1,
	"speed": 451
}, {
	"loc_time": 1532040903,
	"latitude": 31.354658217729,
	"longitude": 121.41286271704,
	"create_time": "2018-07-25 14:03:07",
	"direction": 251,
	"height": 0,
	"speed": 461
}, {
	"loc_time": 1532040933,
	"latitude": 31.353457901198,
	"longitude": 121.40906006032,
	"create_time": "2018-07-25 14:03:07",
	"direction": 251,
	"height": 0,
	"speed": 435
}, {
	"loc_time": 1532040963,
	"latitude": 31.352719323621,
	"longitude": 121.4056739039,
	"create_time": "2018-07-25 14:03:07",
	"direction": 258,
	"height": 0,
	"speed": 391
}, {
	"loc_time": 1532040993,
	"latitude": 31.351782271147,
	"longitude": 121.40200280522,
	"create_time": "2018-07-25 14:03:07",
	"direction": 249,
	"height": 1,
	"speed": 434
}, {
	"loc_time": 1532041023,
	"latitude": 31.3502548776,
	"longitude": 121.39841483525,
	"create_time": "2018-07-25 14:03:07",
	"direction": 241,
	"height": 0,
	"speed": 469
}, {
	"loc_time": 1532041053,
	"latitude": 31.348584171375,
	"longitude": 121.39502998871,
	"create_time": "2018-07-25 14:03:07",
	"direction": 239,
	"height": 0,
	"speed": 427
}, {
	"loc_time": 1532041083,
	"latitude": 31.347069831987,
	"longitude": 121.39192306007,
	"create_time": "2018-07-25 14:03:07",
	"direction": 238,
	"height": 0,
	"speed": 406
}, {
	"loc_time": 1532041113,
	"latitude": 31.345684861275,
	"longitude": 121.38890532644,
	"create_time": "2018-07-25 14:03:07",
	"direction": 240,
	"height": 0,
	"speed": 379
}, {
	"loc_time": 1532041143,
	"latitude": 31.344314018573,
	"longitude": 121.38592126484,
	"create_time": "2018-07-25 14:03:07",
	"direction": 243,
	"height": 0,
	"speed": 408
}, {
	"loc_time": 1532041173,
	"latitude": 31.343082351015,
	"longitude": 121.38255394826,
	"create_time": "2018-07-25 14:03:07",
	"direction": 249,
	"height": 0,
	"speed": 420
}, {
	"loc_time": 1532041203,
	"latitude": 31.342013627135,
	"longitude": 121.3791079988,
	"create_time": "2018-07-25 14:03:07",
	"direction": 250,
	"height": 0,
	"speed": 415
}, {
	"loc_time": 1532041233,
	"latitude": 31.340953900726,
	"longitude": 121.37563063086,
	"create_time": "2018-07-25 14:03:07",
	"direction": 253,
	"height": 0,
	"speed": 406
}, {
	"loc_time": 1532041263,
	"latitude": 31.340130678435,
	"longitude": 121.37247304833,
	"create_time": "2018-07-25 14:03:07",
	"direction": 254,
	"height": 0,
	"speed": 348
}, {
	"loc_time": 1532041293,
	"latitude": 31.339160024075,
	"longitude": 121.369245084,
	"create_time": "2018-07-25 14:03:07",
	"direction": 247,
	"height": 0,
	"speed": 443
}, {
	"loc_time": 1532041323,
	"latitude": 31.337996268622,
	"longitude": 121.36585372355,
	"create_time": "2018-07-25 14:03:07",
	"direction": 251,
	"height": 0,
	"speed": 353
}, {
	"loc_time": 1532041353,
	"latitude": 31.337304840994,
	"longitude": 121.36274287521,
	"create_time": "2018-07-25 14:03:07",
	"direction": 257,
	"height": 1,
	"speed": 402
}, {
	"loc_time": 1532041383,
	"latitude": 31.337024397994,
	"longitude": 121.35897353444,
	"create_time": "2018-07-25 14:03:07",
	"direction": 268,
	"height": 0,
	"speed": 442
}, {
	"loc_time": 1532041413,
	"latitude": 31.33743082276,
	"longitude": 121.3550044909,
	"create_time": "2018-07-25 14:03:07",
	"direction": 279,
	"height": 0,
	"speed": 457
}, {
	"loc_time": 1532041443,
	"latitude": 31.338230764183,
	"longitude": 121.35097857355,
	"create_time": "2018-07-25 14:03:07",
	"direction": 281,
	"height": 0,
	"speed": 449
}, {
	"loc_time": 1532041473,
	"latitude": 31.338961022657,
	"longitude": 121.34703603779,
	"create_time": "2018-07-25 14:03:07",
	"direction": 276,
	"height": 0,
	"speed": 492
}, {
	"loc_time": 1532041503,
	"latitude": 31.339042076577,
	"longitude": 121.34256473111,
	"create_time": "2018-07-25 14:03:07",
	"direction": 264,
	"height": 0,
	"speed": 510
}, {
	"loc_time": 1532041533,
	"latitude": 31.338413616291,
	"longitude": 121.33821349539,
	"create_time": "2018-07-25 14:03:07",
	"direction": 257,
	"height": 1,
	"speed": 488
}, {
	"loc_time": 1532041563,
	"latitude": 31.337630831491,
	"longitude": 121.33388753581,
	"create_time": "2018-07-25 14:03:07",
	"direction": 257,
	"height": 0,
	"speed": 514
}, {
	"loc_time": 1532041593,
	"latitude": 31.336764728767,
	"longitude": 121.32965170794,
	"create_time": "2018-07-25 14:03:07",
	"direction": 251,
	"height": 0,
	"speed": 490
}, {
	"loc_time": 1532041623,
	"latitude": 31.33553601915,
	"longitude": 121.32547485794,
	"create_time": "2018-07-25 14:03:07",
	"direction": 246,
	"height": 0,
	"speed": 489
}, {
	"loc_time": 1532041653,
	"latitude": 31.334100052036,
	"longitude": 121.32157453845,
	"create_time": "2018-07-25 14:03:07",
	"direction": 246,
	"height": 0,
	"speed": 494
}, {
	"loc_time": 1532041683,
	"latitude": 31.332919866468,
	"longitude": 121.31833519743,
	"create_time": "2018-07-25 14:03:07",
	"direction": 245,
	"height": 0,
	"speed": 331
}, {
	"loc_time": 1532041713,
	"latitude": 31.331837712173,
	"longitude": 121.31541978855,
	"create_time": "2018-07-25 14:03:07",
	"direction": 247,
	"height": 0,
	"speed": 379
}, {
	"loc_time": 1532041743,
	"latitude": 31.330591364129,
	"longitude": 121.3120467015,
	"create_time": "2018-07-25 14:03:07",
	"direction": 246,
	"height": 0,
	"speed": 433
}, {
	"loc_time": 1532041773,
	"latitude": 31.329294945881,
	"longitude": 121.30864165416,
	"create_time": "2018-07-25 14:03:07",
	"direction": 246,
	"height": 0,
	"speed": 420
}, {
	"loc_time": 1532041803,
	"latitude": 31.328044466574,
	"longitude": 121.30528299412,
	"create_time": "2018-07-25 14:03:07",
	"direction": 246,
	"height": 0,
	"speed": 400
}, {
	"loc_time": 1532041833,
	"latitude": 31.327011722499,
	"longitude": 121.30256464511,
	"create_time": "2018-07-25 14:03:07",
	"direction": 249,
	"height": 0,
	"speed": 352
}, {
	"loc_time": 1532041863,
	"latitude": 31.325875486108,
	"longitude": 121.29953284375,
	"create_time": "2018-07-25 14:03:07",
	"direction": 247,
	"height": 0,
	"speed": 446
}, {
	"loc_time": 1532041893,
	"latitude": 31.324340626556,
	"longitude": 121.29556949719,
	"create_time": "2018-07-25 14:03:07",
	"direction": 247,
	"height": 1,
	"speed": 507
}, {
	"loc_time": 1532041923,
	"latitude": 31.322876737625,
	"longitude": 121.29176261288,
	"create_time": "2018-07-25 14:03:07",
	"direction": 247,
	"height": 1,
	"speed": 424
}, {
	"loc_time": 1532041953,
	"latitude": 31.321817113201,
	"longitude": 121.28841943698,
	"create_time": "2018-07-25 14:03:07",
	"direction": 256,
	"height": 0,
	"speed": 388
}, {
	"loc_time": 1532041983,
	"latitude": 31.321336709345,
	"longitude": 121.28529203937,
	"create_time": "2018-07-25 14:03:07",
	"direction": 263,
	"height": 0,
	"speed": 343
}, {
	"loc_time": 1532042013,
	"latitude": 31.321210345927,
	"longitude": 121.28238980713,
	"create_time": "2018-07-25 14:03:07",
	"direction": 262,
	"height": 1,
	"speed": 268
}, {
	"loc_time": 1532042036,
	"latitude": 31.321080911673,
	"longitude": 121.28138225517,
	"create_time": "2018-07-25 14:03:07",
	"direction": 235,
	"height": 0,
	"speed": 33
}, {
	"loc_time": 1532042043,
	"latitude": 31.321032476417,
	"longitude": 121.28139220961,
	"create_time": "2018-07-25 14:03:07",
	"direction": 235,
	"height": 1,
	"speed": 45
}, {
	"loc_time": 1532042073,
	"latitude": 31.320947881523,
	"longitude": 121.2814169965,
	"create_time": "2018-07-25 14:03:07",
	"direction": 178,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532042103,
	"latitude": 31.320947881523,
	"longitude": 121.2814169965,
	"create_time": "2018-07-25 14:03:07",
	"direction": 178,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532042107,
	"latitude": 31.320947881523,
	"longitude": 121.2814169965,
	"create_time": "2018-07-25 14:03:07",
	"direction": 178,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532042137,
	"latitude": 31.319030946641,
	"longitude": 121.28181899184,
	"create_time": "2018-07-25 14:03:07",
	"direction": 160,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532042152,
	"latitude": 31.319030946641,
	"longitude": 121.28181899184,
	"create_time": "2018-07-25 14:03:07",
	"direction": 160,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532042182,
	"latitude": 31.315859244907,
	"longitude": 121.28443368322,
	"create_time": "2018-07-25 14:03:07",
	"direction": 152,
	"height": 1,
	"speed": 277
}, {
	"loc_time": 1532042212,
	"latitude": 31.314281600937,
	"longitude": 121.28523825179,
	"create_time": "2018-07-25 14:03:07",
	"direction": 162,
	"height": 0,
	"speed": 218
}, {
	"loc_time": 1532042236,
	"latitude": 31.313718133101,
	"longitude": 121.28554845839,
	"create_time": "2018-07-25 14:03:07",
	"direction": 140,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532042242,
	"latitude": 31.313718133101,
	"longitude": 121.28554845839,
	"create_time": "2018-07-25 14:03:07",
	"direction": 140,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532042272,
	"latitude": 31.311265503703,
	"longitude": 121.28700680813,
	"create_time": "2018-07-25 14:03:07",
	"direction": 151,
	"height": 1,
	"speed": 278
}, {
	"loc_time": 1532042302,
	"latitude": 31.309493040273,
	"longitude": 121.28802726395,
	"create_time": "2018-07-25 14:03:07",
	"direction": 155,
	"height": 0,
	"speed": 163
}, {
	"loc_time": 1532042320,
	"latitude": 31.309307211298,
	"longitude": 121.2881851248,
	"create_time": "2018-07-25 14:03:07",
	"direction": 128,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532042332,
	"latitude": 31.309307211298,
	"longitude": 121.2881851248,
	"create_time": "2018-07-25 14:03:07",
	"direction": 128,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532042362,
	"latitude": 31.309307211298,
	"longitude": 121.2881851248,
	"create_time": "2018-07-25 14:03:07",
	"direction": 128,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532042392,
	"latitude": 31.309307211298,
	"longitude": 121.2881851248,
	"create_time": "2018-07-25 14:03:07",
	"direction": 128,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532042422,
	"latitude": 31.309307211298,
	"longitude": 121.2881851248,
	"create_time": "2018-07-25 14:03:07",
	"direction": 128,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532042452,
	"latitude": 31.309307211298,
	"longitude": 121.2881851248,
	"create_time": "2018-07-25 14:03:07",
	"direction": 128,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532042482,
	"latitude": 31.309307211298,
	"longitude": 121.2881851248,
	"create_time": "2018-07-25 14:03:07",
	"direction": 128,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532042512,
	"latitude": 31.309307211298,
	"longitude": 121.2881851248,
	"create_time": "2018-07-25 14:03:07",
	"direction": 128,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532042542,
	"latitude": 31.309307211298,
	"longitude": 121.2881851248,
	"create_time": "2018-07-25 14:03:07",
	"direction": 128,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532042560,
	"latitude": 31.309307211298,
	"longitude": 121.2881851248,
	"create_time": "2018-07-25 14:03:07",
	"direction": 128,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532042590,
	"latitude": 31.299379455976,
	"longitude": 121.29171475439,
	"create_time": "2018-07-25 14:03:07",
	"direction": 239,
	"height": 1,
	"speed": 231
}, {
	"loc_time": 1532042620,
	"latitude": 31.298640671327,
	"longitude": 121.28953683914,
	"create_time": "2018-07-25 14:03:07",
	"direction": 248,
	"height": 1,
	"speed": 290
}, {
	"loc_time": 1532042650,
	"latitude": 31.29755093535,
	"longitude": 121.28742194288,
	"create_time": "2018-07-25 14:03:07",
	"direction": 229,
	"height": 1,
	"speed": 284
}, {
	"loc_time": 1532042680,
	"latitude": 31.296488462698,
	"longitude": 121.28559212414,
	"create_time": "2018-07-25 14:03:07",
	"direction": 238,
	"height": 1,
	"speed": 226
}, {
	"loc_time": 1532042710,
	"latitude": 31.295113554552,
	"longitude": 121.28369758545,
	"create_time": "2018-07-25 14:03:07",
	"direction": 225,
	"height": 1,
	"speed": 302
}, {
	"loc_time": 1532042740,
	"latitude": 31.293320137493,
	"longitude": 121.28232618197,
	"create_time": "2018-07-25 14:03:07",
	"direction": 196,
	"height": 0,
	"speed": 310
}, {
	"loc_time": 1532042770,
	"latitude": 31.291161071789,
	"longitude": 121.28176786451,
	"create_time": "2018-07-25 14:03:10",
	"direction": 186,
	"height": 0,
	"speed": 210
}, {
	"loc_time": 1532042800,
	"latitude": 31.289591494834,
	"longitude": 121.28169856053,
	"create_time": "2018-07-25 14:03:10",
	"direction": 179,
	"height": 0,
	"speed": 266
}, {
	"loc_time": 1532042830,
	"latitude": 31.287531384271,
	"longitude": 121.2818555648,
	"create_time": "2018-07-25 14:03:10",
	"direction": 173,
	"height": 0,
	"speed": 267
}, {
	"loc_time": 1532042860,
	"latitude": 31.28521192767,
	"longitude": 121.28216048981,
	"create_time": "2018-07-25 14:03:10",
	"direction": 176,
	"height": 0,
	"speed": 326
}, {
	"loc_time": 1532042890,
	"latitude": 31.282728465383,
	"longitude": 121.28242439307,
	"create_time": "2018-07-25 14:03:10",
	"direction": 173,
	"height": 0,
	"speed": 297
}, {
	"loc_time": 1532042920,
	"latitude": 31.280758192175,
	"longitude": 121.28266465361,
	"create_time": "2018-07-25 14:03:10",
	"direction": 174,
	"height": 0,
	"speed": 139
}, {
	"loc_time": 1532042950,
	"latitude": 31.280640056496,
	"longitude": 121.28278636055,
	"create_time": "2018-07-25 14:03:10",
	"direction": 170,
	"height": 0,
	"speed": 67
}, {
	"loc_time": 1532042980,
	"latitude": 31.279638232715,
	"longitude": 121.282790343,
	"create_time": "2018-07-25 14:03:10",
	"direction": 180,
	"height": 0,
	"speed": 192
}, {
	"loc_time": 1532043010,
	"latitude": 31.27781408914,
	"longitude": 121.28288799348,
	"create_time": "2018-07-25 14:03:10",
	"direction": 175,
	"height": 0,
	"speed": 229
}, {
	"loc_time": 1532043040,
	"latitude": 31.276033757299,
	"longitude": 121.28319840001,
	"create_time": "2018-07-25 14:03:10",
	"direction": 171,
	"height": 0,
	"speed": 210
}, {
	"loc_time": 1532043070,
	"latitude": 31.275518658637,
	"longitude": 121.28537291621,
	"create_time": "2018-07-25 14:03:10",
	"direction": 102,
	"height": 0,
	"speed": 259
}, {
	"loc_time": 1532043100,
	"latitude": 31.275205805154,
	"longitude": 121.2880529786,
	"create_time": "2018-07-25 14:03:10",
	"direction": 98,
	"height": 0,
	"speed": 307
}, {
	"loc_time": 1532043130,
	"latitude": 31.274718682374,
	"longitude": 121.2913674316,
	"create_time": "2018-07-25 14:03:10",
	"direction": 97,
	"height": 1,
	"speed": 387
}, {
	"loc_time": 1532043160,
	"latitude": 31.274401054047,
	"longitude": 121.29426958234,
	"create_time": "2018-07-25 14:03:10",
	"direction": 97,
	"height": 1,
	"speed": 284
}, {
	"loc_time": 1532043190,
	"latitude": 31.274174944886,
	"longitude": 121.29438775755,
	"create_time": "2018-07-25 14:03:10",
	"direction": 278,
	"height": 0,
	"speed": 129
}, {
	"loc_time": 1532043220,
	"latitude": 31.274353231306,
	"longitude": 121.29337770175,
	"create_time": "2018-07-25 14:03:10",
	"direction": 277,
	"height": 1,
	"speed": 74
}, {
	"loc_time": 1532043241,
	"latitude": 31.27426426066,
	"longitude": 121.29310377489,
	"create_time": "2018-07-25 14:03:10",
	"direction": 267,
	"height": 0,
	"speed": 38
}, {
	"loc_time": 1532043250,
	"latitude": 31.274093140157,
	"longitude": 121.29311878027,
	"create_time": "2018-07-25 14:03:10",
	"direction": 184,
	"height": 0,
	"speed": 80
}, {
	"loc_time": 1532043280,
	"latitude": 31.2739471963,
	"longitude": 121.29249610652,
	"create_time": "2018-07-25 14:03:10",
	"direction": 227,
	"height": 0,
	"speed": 95
}, {
	"loc_time": 1532043310,
	"latitude": 31.273528555059,
	"longitude": 121.29240011659,
	"create_time": "2018-07-25 14:03:10",
	"direction": 202,
	"height": 0,
	"speed": 38
}, {
	"loc_time": 1532043312,
	"latitude": 31.2735335514,
	"longitude": 121.29239174283,
	"create_time": "2018-07-25 14:03:10",
	"direction": 202,
	"height": 0,
	"speed": 22
}, {
	"loc_time": 1532043340,
	"latitude": 31.273579360388,
	"longitude": 121.29234688488,
	"create_time": "2018-07-25 14:03:10",
	"direction": 202,
	"height": 0,
	"speed": 32
}, {
	"loc_time": 1532043370,
	"latitude": 31.273699473874,
	"longitude": 121.29211270628,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 0,
	"speed": 23
}, {
	"loc_time": 1532043400,
	"latitude": 31.273653476266,
	"longitude": 121.29214757583,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 0,
	"speed": 25
}, {
	"loc_time": 1532043430,
	"latitude": 31.273684848656,
	"longitude": 121.29221558003,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 0,
	"speed": 12
}, {
	"loc_time": 1532043460,
	"latitude": 31.273713965732,
	"longitude": 121.29217721668,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 0,
	"speed": 27
}, {
	"loc_time": 1532043490,
	"latitude": 31.273814800791,
	"longitude": 121.29213068742,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 6,
	"speed": 0
}, {
	"loc_time": 1532043520,
	"latitude": 31.27385600523,
	"longitude": 121.2922605065,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532043550,
	"latitude": 31.27385600523,
	"longitude": 121.2922605065,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532043580,
	"latitude": 31.27385600523,
	"longitude": 121.2922605065,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532043610,
	"latitude": 31.27385600523,
	"longitude": 121.2922605065,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532043640,
	"latitude": 31.27385600523,
	"longitude": 121.2922605065,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532043670,
	"latitude": 31.27385600523,
	"longitude": 121.2922605065,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532043700,
	"latitude": 31.27385600523,
	"longitude": 121.2922605065,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532043730,
	"latitude": 31.27385600523,
	"longitude": 121.2922605065,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532043760,
	"latitude": 31.27385600523,
	"longitude": 121.2922605065,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532043790,
	"latitude": 31.27385600523,
	"longitude": 121.2922605065,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532043820,
	"latitude": 31.27385600523,
	"longitude": 121.2922605065,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532043848,
	"latitude": 31.27385600523,
	"longitude": 121.2922605065,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532043878,
	"latitude": 31.273695392415,
	"longitude": 121.29215563604,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 1,
	"speed": 11
}, {
	"loc_time": 1532043908,
	"latitude": 31.273641456307,
	"longitude": 121.29221562044,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 0,
	"speed": 33
}, {
	"loc_time": 1532043938,
	"latitude": 31.273644897135,
	"longitude": 121.29222560624,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 0,
	"speed": 26
}, {
	"loc_time": 1532043968,
	"latitude": 31.273617105506,
	"longitude": 121.29232039247,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 1,
	"speed": 11
}, {
	"loc_time": 1532043998,
	"latitude": 31.273687660861,
	"longitude": 121.29235164343,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 1,
	"speed": 32
}, {
	"loc_time": 1532044028,
	"latitude": 31.273724846629,
	"longitude": 121.29212078192,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 0,
	"speed": 58
}, {
	"loc_time": 1532044058,
	"latitude": 31.273790568908,
	"longitude": 121.2922419391,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 0,
	"speed": 33
}, {
	"loc_time": 1532044080,
	"latitude": 31.273790568908,
	"longitude": 121.2922419391,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 4,
	"speed": 0
}, {
	"loc_time": 1532044110,
	"latitude": 31.273790568908,
	"longitude": 121.2922419391,
	"create_time": "2018-07-25 14:03:10",
	"direction": 296,
	"height": 2,
	"speed": 0
}, {
	"loc_time": 1532044140,
	"latitude": 31.273895890589,
	"longitude": 121.29242110248,
	"create_time": "2018-07-25 14:03:10",
	"direction": 13,
	"height": 1,
	"speed": 95
}, {
	"loc_time": 1532044170,
	"latitude": 31.27397837735,
	"longitude": 121.29237972066,
	"create_time": "2018-07-25 14:03:10",
	"direction": 12,
	"height": 2,
	"speed": 32
}, {
	"loc_time": 1532044171,
	"latitude": 31.27397502702,
	"longitude": 121.29237459431,
	"create_time": "2018-07-25 14:03:10",
	"direction": 12,
	"height": 2,
	"speed": 31
}, {
	"loc_time": 1532044200,
	"latitude": 31.273911251914,
	"longitude": 121.29228529276,
	"create_time": "2018-07-25 14:03:10",
	"direction": 12,
	"height": 127,
	"speed": 19
}, {
	"loc_time": 1532044230,
	"latitude": 31.273745519085,
	"longitude": 121.29224036112,
	"create_time": "2018-07-25 14:03:10",
	"direction": 12,
	"height": 0,
	"speed": 22
}, {
	"loc_time": 1532044242,
	"latitude": 31.273745519085,
	"longitude": 121.29224036112,
	"create_time": "2018-07-25 14:03:10",
	"direction": 12,
	"height": 2,
	"speed": 0
}, {
	"loc_time": 1532044272,
	"latitude": 31.274514653464,
	"longitude": 121.29186114651,
	"create_time": "2018-07-25 14:03:10",
	"direction": 146,
	"height": 0,
	"speed": 419
}, {
	"loc_time": 1532045570,
	"latitude": 31.273676325116,
	"longitude": 121.29228200127,
	"create_time": "2018-07-25 14:03:10",
	"direction": 0,
	"height": 1,
	"speed": 4
}, {
	"loc_time": 1532045600,
	"latitude": 31.273621150084,
	"longitude": 121.29227557334,
	"create_time": "2018-07-25 14:03:10",
	"direction": 0,
	"height": 0,
	"speed": 38
}, {
	"loc_time": 1532045618,
	"latitude": 31.273621150084,
	"longitude": 121.29227557334,
	"create_time": "2018-07-25 14:03:10",
	"direction": 0,
	"height": 2,
	"speed": 0
}, {
	"loc_time": 1532045648,
	"latitude": 31.273542863431,
	"longitude": 121.29228050588,
	"create_time": "2018-07-25 14:03:10",
	"direction": 0,
	"height": 127,
	"speed": 9
}, {
	"loc_time": 1532045678,
	"latitude": 31.273617105506,
	"longitude": 121.29232039247,
	"create_time": "2018-07-25 14:03:10",
	"direction": 0,
	"height": 1,
	"speed": 14
}, {
	"loc_time": 1532045708,
	"latitude": 31.273613284802,
	"longitude": 121.29239166842,
	"create_time": "2018-07-25 14:03:10",
	"direction": 0,
	"height": 2,
	"speed": 26
}, {
	"loc_time": 1532045738,
	"latitude": 31.27354837432,
	"longitude": 121.29254615154,
	"create_time": "2018-07-25 14:03:10",
	"direction": 78,
	"height": 0,
	"speed": 21
}, {
	"loc_time": 1532045751,
	"latitude": 31.27354837432,
	"longitude": 121.29254615154,
	"create_time": "2018-07-25 14:03:10",
	"direction": 78,
	"height": 127,
	"speed": 0
}, {
	"loc_time": 1532045781,
	"latitude": 31.273624970831,
	"longitude": 121.2924799377,
	"create_time": "2018-07-25 14:03:10",
	"direction": 78,
	"height": 2,
	"speed": 12
}, {
	"loc_time": 1532045811,
	"latitude": 31.273666477184,
	"longitude": 121.29229199941,
	"create_time": "2018-07-25 14:03:10",
	"direction": 78,
	"height": 2,
	"speed": 15
}, {
	"loc_time": 1532046582,
	"latitude": 31.273655666399,
	"longitude": 121.29225043372,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 1,
	"speed": 2
}, {
	"loc_time": 1532046612,
	"latitude": 31.273656321696,
	"longitude": 121.29228552954,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 1,
	"speed": 4
}, {
	"loc_time": 1532046642,
	"latitude": 31.273691800952,
	"longitude": 121.29231195376,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 2,
	"speed": 7
}, {
	"loc_time": 1532046672,
	"latitude": 31.273681393305,
	"longitude": 121.29229198552,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532046702,
	"latitude": 31.273674341679,
	"longitude": 121.292350036,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532046732,
	"latitude": 31.273681953086,
	"longitude": 121.29232195188,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 0,
	"speed": 10
}, {
	"loc_time": 1532046762,
	"latitude": 31.2736858656,
	"longitude": 121.29225553509,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 0,
	"speed": 3
}, {
	"loc_time": 1532046792,
	"latitude": 31.273686052091,
	"longitude": 121.2922655239,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532046822,
	"latitude": 31.273680838763,
	"longitude": 121.29226228908,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 0,
	"speed": 3
}, {
	"loc_time": 1532046852,
	"latitude": 31.273680899249,
	"longitude": 121.2922655287,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532046882,
	"latitude": 31.273682611173,
	"longitude": 121.29225553811,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 0,
	"speed": 10
}, {
	"loc_time": 1532046912,
	"latitude": 31.273672516213,
	"longitude": 121.29225230784,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 0,
	"speed": 5
}, {
	"loc_time": 1532046942,
	"latitude": 31.273680808521,
	"longitude": 121.29226066927,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 0,
	"speed": 2
}, {
	"loc_time": 1532046972,
	"latitude": 31.273680838763,
	"longitude": 121.29226228908,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532047002,
	"latitude": 31.273662637974,
	"longitude": 121.29226068619,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 0,
	"speed": 13
}, {
	"loc_time": 1532047032,
	"latitude": 31.273689036944,
	"longitude": 121.29209111799,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 1,
	"speed": 22
}, {
	"loc_time": 1532047062,
	"latitude": 31.273628171019,
	"longitude": 121.29204122917,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 0,
	"speed": 7
}, {
	"loc_time": 1532047092,
	"latitude": 31.273651866432,
	"longitude": 121.29206118531,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 0,
	"speed": 11
}, {
	"loc_time": 1532047122,
	"latitude": 31.273662398771,
	"longitude": 121.29208790308,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 0,
	"speed": 5
}, {
	"loc_time": 1532047152,
	"latitude": 31.273672121442,
	"longitude": 121.29207115555,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 0,
	"speed": 7
}, {
	"loc_time": 1532047182,
	"latitude": 31.273684341423,
	"longitude": 121.29210111144,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532047212,
	"latitude": 31.273624712636,
	"longitude": 121.29211763545,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 0,
	"speed": 21
}, {
	"loc_time": 1532047242,
	"latitude": 31.273579572335,
	"longitude": 121.29211119815,
	"create_time": "2018-07-25 14:03:10",
	"direction": 14,
	"height": 0,
	"speed": 10
}, {
	"loc_time": 1532047272,
	"latitude": 31.273574443175,
	"longitude": 121.29244650861,
	"create_time": "2018-07-25 14:03:10",
	"direction": 44,
	"height": 0,
	"speed": 86
}, {
	"loc_time": 1532047302,
	"latitude": 31.27368902883,
	"longitude": 121.29242480421,
	"create_time": "2018-07-25 14:03:10",
	"direction": 7,
	"height": 0,
	"speed": 32
}, {
	"loc_time": 1532047332,
	"latitude": 31.273662398771,
	"longitude": 121.29208790308,
	"create_time": "2018-07-25 14:03:10",
	"direction": 269,
	"height": 0,
	"speed": 61
}, {
	"loc_time": 1532047362,
	"latitude": 31.27371509395,
	"longitude": 121.29213590958,
	"create_time": "2018-07-25 14:03:10",
	"direction": 269,
	"height": 0,
	"speed": 50
}, {
	"loc_time": 1532047392,
	"latitude": 31.273717789851,
	"longitude": 121.29210593987,
	"create_time": "2018-07-25 14:03:10",
	"direction": 269,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532047422,
	"latitude": 31.273739762755,
	"longitude": 121.29212076805,
	"create_time": "2018-07-25 14:03:10",
	"direction": 269,
	"height": 0,
	"speed": 22
}, {
	"loc_time": 1532047452,
	"latitude": 31.273806189698,
	"longitude": 121.29252620377,
	"create_time": "2018-07-25 14:03:10",
	"direction": 58,
	"height": 0,
	"speed": 59
}, {
	"loc_time": 1532047482,
	"latitude": 31.27366510776,
	"longitude": 121.29214594515,
	"create_time": "2018-07-25 14:03:10",
	"direction": 58,
	"height": 0,
	"speed": 58
}, {
	"loc_time": 1532047512,
	"latitude": 31.273687872554,
	"longitude": 121.29211595678,
	"create_time": "2018-07-25 14:03:10",
	"direction": 58,
	"height": 0,
	"speed": 25
}, {
	"loc_time": 1532047542,
	"latitude": 31.273606379343,
	"longitude": 121.29203611994,
	"create_time": "2018-07-25 14:03:10",
	"direction": 58,
	"height": 0,
	"speed": 4
}, {
	"loc_time": 1532047572,
	"latitude": 31.273598519761,
	"longitude": 121.29205097595,
	"create_time": "2018-07-25 14:03:10",
	"direction": 58,
	"height": 0,
	"speed": 11
}, {
	"loc_time": 1532047602,
	"latitude": 31.273621662167,
	"longitude": 121.29204123524,
	"create_time": "2018-07-25 14:03:10",
	"direction": 58,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532047632,
	"latitude": 31.273621968832,
	"longitude": 121.29205770348,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 0,
	"speed": 7
}, {
	"loc_time": 1532047662,
	"latitude": 31.27362663429,
	"longitude": 121.29204609017,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 0,
	"speed": 9
}, {
	"loc_time": 1532047692,
	"latitude": 31.273642420347,
	"longitude": 121.29209278125,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 0,
	"speed": 18
}, {
	"loc_time": 1532047722,
	"latitude": 31.273613375549,
	"longitude": 121.29204772239,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 1,
	"speed": 22
}, {
	"loc_time": 1532047752,
	"latitude": 31.273582177881,
	"longitude": 121.29207636891,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 1,
	"speed": 11
}, {
	"loc_time": 1532047782,
	"latitude": 31.273471737978,
	"longitude": 121.29188370841,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 0,
	"speed": 19
}, {
	"loc_time": 1532047812,
	"latitude": 31.273537861821,
	"longitude": 121.2918517891,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 0,
	"speed": 39
}, {
	"loc_time": 1532047842,
	"latitude": 31.273564655262,
	"longitude": 121.2918633732,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532047872,
	"latitude": 31.273564845857,
	"longitude": 121.29187363222,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 1,
	"speed": 12
}, {
	"loc_time": 1532047902,
	"latitude": 31.273563404248,
	"longitude": 121.29188362278,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532047932,
	"latitude": 31.273575587762,
	"longitude": 121.29191168917,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 1,
	"speed": 5
}, {
	"loc_time": 1532047962,
	"latitude": 31.273589187843,
	"longitude": 121.29192841512,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532047992,
	"latitude": 31.273503040872,
	"longitude": 121.29194820393,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 1,
	"speed": 19
}, {
	"loc_time": 1532048022,
	"latitude": 31.273515506111,
	"longitude": 121.29199138865,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 1,
	"speed": 21
}, {
	"loc_time": 1532048052,
	"latitude": 31.27356166116,
	"longitude": 121.29203778151,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 3,
	"speed": 8
}, {
	"loc_time": 1532048082,
	"latitude": 31.273598567605,
	"longitude": 121.29214087765,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 0,
	"speed": 22
}, {
	"loc_time": 1532048112,
	"latitude": 31.27360529289,
	"longitude": 121.29215248028,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 0,
	"speed": 22
}, {
	"loc_time": 1532048142,
	"latitude": 31.2735879796,
	"longitude": 121.29211119031,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 1,
	"speed": 20
}, {
	"loc_time": 1532048172,
	"latitude": 31.273530038481,
	"longitude": 121.29213095255,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 0,
	"speed": 22
}, {
	"loc_time": 1532048202,
	"latitude": 31.273649767863,
	"longitude": 121.2922104832,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 0,
	"speed": 5
}, {
	"loc_time": 1532048232,
	"latitude": 31.273482496247,
	"longitude": 121.29208294142,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 1,
	"speed": 28
}, {
	"loc_time": 1532048262,
	"latitude": 31.273586491117,
	"longitude": 121.29203127891,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 0,
	"speed": 25
}, {
	"loc_time": 1532048292,
	"latitude": 31.273863149096,
	"longitude": 121.29254099919,
	"create_time": "2018-07-25 14:03:13",
	"direction": 54,
	"height": 0,
	"speed": 125
}, {
	"loc_time": 1532048322,
	"latitude": 31.273715233369,
	"longitude": 121.29348627404,
	"create_time": "2018-07-25 14:03:13",
	"direction": 94,
	"height": 0,
	"speed": 117
}, {
	"loc_time": 1532048352,
	"latitude": 31.273905495368,
	"longitude": 121.29449436597,
	"create_time": "2018-07-25 14:03:13",
	"direction": 359,
	"height": 1,
	"speed": 65
}, {
	"loc_time": 1532048382,
	"latitude": 31.274002584471,
	"longitude": 121.29459388638,
	"create_time": "2018-07-25 14:03:13",
	"direction": 359,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532048412,
	"latitude": 31.274031520849,
	"longitude": 121.29453258173,
	"create_time": "2018-07-25 14:03:13",
	"direction": 359,
	"height": 1,
	"speed": 10
}, {
	"loc_time": 1532048442,
	"latitude": 31.273993024255,
	"longitude": 121.29451912,
	"create_time": "2018-07-25 14:03:13",
	"direction": 359,
	"height": 2,
	"speed": 6
}, {
	"loc_time": 1532048472,
	"latitude": 31.274020818133,
	"longitude": 121.29449749852,
	"create_time": "2018-07-25 14:03:13",
	"direction": 359,
	"height": 0,
	"speed": 16
}, {
	"loc_time": 1532048473,
	"latitude": 31.274020818133,
	"longitude": 121.29449749852,
	"create_time": "2018-07-25 14:03:13",
	"direction": 359,
	"height": 1,
	"speed": 16
}, {
	"loc_time": 1532048503,
	"latitude": 31.274027886031,
	"longitude": 121.29451260902,
	"create_time": "2018-07-25 14:03:13",
	"direction": 359,
	"height": 1,
	"speed": 20
}, {
	"loc_time": 1532048533,
	"latitude": 31.274046339326,
	"longitude": 121.29452743904,
	"create_time": "2018-07-25 14:03:13",
	"direction": 22,
	"height": 0,
	"speed": 62
}, {
	"loc_time": 1532048538,
	"latitude": 31.274046339326,
	"longitude": 121.29452743904,
	"create_time": "2018-07-25 14:03:13",
	"direction": 22,
	"height": 1,
	"speed": 62
}, {
	"loc_time": 1532048568,
	"latitude": 31.274058363752,
	"longitude": 121.29463189722,
	"create_time": "2018-07-25 14:03:13",
	"direction": 22,
	"height": 1,
	"speed": 11
}, {
	"loc_time": 1532048598,
	"latitude": 31.274368988853,
	"longitude": 121.29473635016,
	"create_time": "2018-07-25 14:03:13",
	"direction": 34,
	"height": 0,
	"speed": 117
}, {
	"loc_time": 1532048628,
	"latitude": 31.274448040379,
	"longitude": 121.29559523655,
	"create_time": "2018-07-25 14:03:13",
	"direction": 88,
	"height": 0,
	"speed": 25
}, {
	"loc_time": 1532048631,
	"latitude": 31.274467980364,
	"longitude": 121.29558846976,
	"create_time": "2018-07-25 14:03:13",
	"direction": 88,
	"height": 0,
	"speed": 39
}, {
	"loc_time": 1532048658,
	"latitude": 31.274345847281,
	"longitude": 121.29646237839,
	"create_time": "2018-07-25 14:03:13",
	"direction": 88,
	"height": 0,
	"speed": 15
}, {
	"loc_time": 1532048668,
	"latitude": 31.274320909647,
	"longitude": 121.29647724799,
	"create_time": "2018-07-25 14:03:13",
	"direction": 88,
	"height": 0,
	"speed": 26
}, {
	"loc_time": 1532048687,
	"latitude": 31.274273302213,
	"longitude": 121.29651211402,
	"create_time": "2018-07-25 14:03:13",
	"direction": 88,
	"height": 0,
	"speed": 20
}, {
	"loc_time": 1532048694,
	"latitude": 31.274273302213,
	"longitude": 121.29651211402,
	"create_time": "2018-07-25 14:03:13",
	"direction": 88,
	"height": 6,
	"speed": 20
}, {
	"loc_time": 1532048724,
	"latitude": 31.274611755027,
	"longitude": 121.2966813259,
	"create_time": "2018-07-25 14:03:13",
	"direction": 24,
	"height": 0,
	"speed": 20
}, {
	"loc_time": 1532048754,
	"latitude": 31.274504851662,
	"longitude": 121.29666468737,
	"create_time": "2018-07-25 14:03:13",
	"direction": 24,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532048784,
	"latitude": 31.274679211089,
	"longitude": 121.29564307492,
	"create_time": "2018-07-25 14:03:13",
	"direction": 288,
	"height": 1,
	"speed": 307
}, {
	"loc_time": 1532048814,
	"latitude": 31.275020569648,
	"longitude": 121.29240549634,
	"create_time": "2018-07-25 14:03:13",
	"direction": 280,
	"height": 0,
	"speed": 450
}, {
	"loc_time": 1532048844,
	"latitude": 31.275473703769,
	"longitude": 121.28847133632,
	"create_time": "2018-07-25 14:03:13",
	"direction": 276,
	"height": 0,
	"speed": 376
}, {
	"loc_time": 1532048874,
	"latitude": 31.275884190296,
	"longitude": 121.28480226323,
	"create_time": "2018-07-25 14:03:13",
	"direction": 278,
	"height": 0,
	"speed": 386
}, {
	"loc_time": 1532048904,
	"latitude": 31.276848201509,
	"longitude": 121.2831612174,
	"create_time": "2018-07-25 14:03:13",
	"direction": 353,
	"height": 0,
	"speed": 324
}, {
	"loc_time": 1532048934,
	"latitude": 31.279474760967,
	"longitude": 121.28290830306,
	"create_time": "2018-07-25 14:03:13",
	"direction": 352,
	"height": 1,
	"speed": 356
}, {
	"loc_time": 1532048962,
	"latitude": 31.280549221109,
	"longitude": 121.28284453356,
	"create_time": "2018-07-25 14:03:13",
	"direction": 352,
	"height": 0,
	"speed": 19
}, {
	"loc_time": 1532048964,
	"latitude": 31.280559135466,
	"longitude": 121.28283614814,
	"create_time": "2018-07-25 14:03:13",
	"direction": 352,
	"height": 0,
	"speed": 61
}, {
	"loc_time": 1532048994,
	"latitude": 31.282358381066,
	"longitude": 121.28254896155,
	"create_time": "2018-07-25 14:03:13",
	"direction": 352,
	"height": 1,
	"speed": 339
}, {
	"loc_time": 1532049021,
	"latitude": 31.284909202923,
	"longitude": 121.282313368,
	"create_time": "2018-07-25 14:03:13",
	"direction": 1,
	"height": 1,
	"speed": 343
}, {
	"loc_time": 1532049025,
	"latitude": 31.285243845253,
	"longitude": 121.28228994379,
	"create_time": "2018-07-25 14:03:13",
	"direction": 357,
	"height": 1,
	"speed": 347
}, {
	"loc_time": 1532049052,
	"latitude": 31.286245019475,
	"longitude": 121.28213834351,
	"create_time": "2018-07-25 14:03:13",
	"direction": 3,
	"height": 0,
	"speed": 45
}, {
	"loc_time": 1532049055,
	"latitude": 31.286284977622,
	"longitude": 121.28212507967,
	"create_time": "2018-07-25 14:03:13",
	"direction": 3,
	"height": 0,
	"speed": 44
}, {
	"loc_time": 1532049085,
	"latitude": 31.287328595055,
	"longitude": 121.28201999797,
	"create_time": "2018-07-25 14:03:13",
	"direction": 353,
	"height": 1,
	"speed": 273
}, {
	"loc_time": 1532049113,
	"latitude": 31.288458132768,
	"longitude": 121.28194818218,
	"create_time": "2018-07-25 14:03:13",
	"direction": 14,
	"height": 0,
	"speed": 23
}, {
	"loc_time": 1532049115,
	"latitude": 31.288459711734,
	"longitude": 121.2819446676,
	"create_time": "2018-07-25 14:03:13",
	"direction": 14,
	"height": 0,
	"speed": 3
}, {
	"loc_time": 1532049145,
	"latitude": 31.28926263808,
	"longitude": 121.28179003499,
	"create_time": "2018-07-25 14:03:13",
	"direction": 1,
	"height": 1,
	"speed": 241
}, {
	"loc_time": 1532049175,
	"latitude": 31.291053177171,
	"longitude": 121.28189115274,
	"create_time": "2018-07-25 14:03:13",
	"direction": 14,
	"height": 1,
	"speed": 219
}, {
	"loc_time": 1532049205,
	"latitude": 31.293363326858,
	"longitude": 121.2825224018,
	"create_time": "2018-07-25 14:03:13",
	"direction": 13,
	"height": 1,
	"speed": 329
}, {
	"loc_time": 1532049235,
	"latitude": 31.295217697646,
	"longitude": 121.28394861573,
	"create_time": "2018-07-25 14:03:13",
	"direction": 60,
	"height": 0,
	"speed": 261
}, {
	"loc_time": 1532049265,
	"latitude": 31.296473820438,
	"longitude": 121.28591142987,
	"create_time": "2018-07-25 14:03:13",
	"direction": 55,
	"height": 1,
	"speed": 354
}, {
	"loc_time": 1532049295,
	"latitude": 31.298108403167,
	"longitude": 121.28853845034,
	"create_time": "2018-07-25 14:03:13",
	"direction": 58,
	"height": 0,
	"speed": 350
}, {
	"loc_time": 1532049325,
	"latitude": 31.299057695732,
	"longitude": 121.29119957701,
	"create_time": "2018-07-25 14:03:13",
	"direction": 72,
	"height": 0,
	"speed": 276
}, {
	"loc_time": 1532049355,
	"latitude": 31.299840267479,
	"longitude": 121.29307357289,
	"create_time": "2018-07-25 14:03:13",
	"direction": 47,
	"height": 1,
	"speed": 198
}, {
	"loc_time": 1532049371,
	"latitude": 31.299902194771,
	"longitude": 121.29317832777,
	"create_time": "2018-07-25 14:03:13",
	"direction": 51,
	"height": 0,
	"speed": 9
}, {
	"loc_time": 1532049385,
	"latitude": 31.299885995389,
	"longitude": 121.29312487363,
	"create_time": "2018-07-25 14:03:13",
	"direction": 51,
	"height": 0,
	"speed": 36
}, {
	"loc_time": 1532049415,
	"latitude": 31.299864945743,
	"longitude": 121.29305873052,
	"create_time": "2018-07-25 14:03:13",
	"direction": 51,
	"height": 1,
	"speed": 13
}, {
	"loc_time": 1532049444,
	"latitude": 31.299904813935,
	"longitude": 121.29330277627,
	"create_time": "2018-07-25 14:03:13",
	"direction": 209,
	"height": 1,
	"speed": 73
}, {
	"loc_time": 1532049445,
	"latitude": 31.299884550533,
	"longitude": 121.29329278383,
	"create_time": "2018-07-25 14:03:13",
	"direction": 206,
	"height": 1,
	"speed": 91
}, {
	"loc_time": 1532049475,
	"latitude": 31.299907388368,
	"longitude": 121.29319479598,
	"create_time": "2018-07-25 14:03:13",
	"direction": 241,
	"height": 2,
	"speed": 50
}, {
	"loc_time": 1532049505,
	"latitude": 31.299886373488,
	"longitude": 121.2936331907,
	"create_time": "2018-07-25 14:03:13",
	"direction": 97,
	"height": 1,
	"speed": 23
}, {
	"loc_time": 1532049507,
	"latitude": 31.299896047656,
	"longitude": 121.29362833366,
	"create_time": "2018-07-25 14:03:13",
	"direction": 97,
	"height": 2,
	"speed": 14
}, {
	"loc_time": 1532049535,
	"latitude": 31.299912246306,
	"longitude": 121.29368151672,
	"create_time": "2018-07-25 14:03:13",
	"direction": 97,
	"height": 2,
	"speed": 69
}, {
	"loc_time": 1532049565,
	"latitude": 31.301625454954,
	"longitude": 121.29272038178,
	"create_time": "2018-07-25 14:03:13",
	"direction": 333,
	"height": 1,
	"speed": 332
}, {
	"loc_time": 1532049595,
	"latitude": 31.30413280081,
	"longitude": 121.29126642559,
	"create_time": "2018-07-25 14:03:13",
	"direction": 335,
	"height": 0,
	"speed": 384
}, {
	"loc_time": 1532049625,
	"latitude": 31.306879917089,
	"longitude": 121.28981789213,
	"create_time": "2018-07-25 14:03:13",
	"direction": 333,
	"height": 0,
	"speed": 399
}, {
	"loc_time": 1532049655,
	"latitude": 31.3088414846,
	"longitude": 121.28870466526,
	"create_time": "2018-07-25 14:03:13",
	"direction": 337,
	"height": 2,
	"speed": 79
}, {
	"loc_time": 1532049668,
	"latitude": 31.308871396413,
	"longitude": 121.28869307263,
	"create_time": "2018-07-25 14:03:13",
	"direction": 337,
	"height": 0,
	"speed": 2
}, {
	"loc_time": 1532049685,
	"latitude": 31.308943367402,
	"longitude": 121.28861993741,
	"create_time": "2018-07-25 14:03:13",
	"direction": 333,
	"height": 0,
	"speed": 91
}, {
	"loc_time": 1532049715,
	"latitude": 31.310661345852,
	"longitude": 121.28763458251,
	"create_time": "2018-07-25 14:03:13",
	"direction": 334,
	"height": 0,
	"speed": 346
}, {
	"loc_time": 1532049745,
	"latitude": 31.312577368657,
	"longitude": 121.28642330133,
	"create_time": "2018-07-25 14:03:13",
	"direction": 342,
	"height": 2,
	"speed": 29
}, {
	"loc_time": 1532049756,
	"latitude": 31.312580677354,
	"longitude": 121.28641006839,
	"create_time": "2018-07-25 14:03:13",
	"direction": 342,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532049775,
	"latitude": 31.312699421654,
	"longitude": 121.28633858116,
	"create_time": "2018-07-25 14:03:13",
	"direction": 337,
	"height": 0,
	"speed": 124
}, {
	"loc_time": 1532049805,
	"latitude": 31.314402034257,
	"longitude": 121.28525321138,
	"create_time": "2018-07-25 14:03:13",
	"direction": 332,
	"height": 1,
	"speed": 344
}, {
	"loc_time": 1532049835,
	"latitude": 31.317008528644,
	"longitude": 121.28371543012,
	"create_time": "2018-07-25 14:03:13",
	"direction": 331,
	"height": 0,
	"speed": 375
}, {
	"loc_time": 1532049865,
	"latitude": 31.319490668897,
	"longitude": 121.28202242946,
	"create_time": "2018-07-25 14:03:13",
	"direction": 329,
	"height": 0,
	"speed": 366
}, {
	"loc_time": 1532049895,
	"latitude": 31.320697021785,
	"longitude": 121.28136538758,
	"create_time": "2018-07-25 14:03:13",
	"direction": 40,
	"height": 0,
	"speed": 154
}, {
	"loc_time": 1532049925,
	"latitude": 31.320833908166,
	"longitude": 121.2835996242,
	"create_time": "2018-07-25 14:03:13",
	"direction": 92,
	"height": 0,
	"speed": 286
}, {
	"loc_time": 1532049955,
	"latitude": 31.321105574394,
	"longitude": 121.2868733887,
	"create_time": "2018-07-25 14:03:13",
	"direction": 75,
	"height": 0,
	"speed": 381
}, {
	"loc_time": 1532049985,
	"latitude": 31.321974173642,
	"longitude": 121.29002246217,
	"create_time": "2018-07-25 14:03:13",
	"direction": 66,
	"height": 0,
	"speed": 350
}, {
	"loc_time": 1532050015,
	"latitude": 31.323353874388,
	"longitude": 121.29362173188,
	"create_time": "2018-07-25 14:03:13",
	"direction": 67,
	"height": 0,
	"speed": 534
}, {
	"loc_time": 1532050045,
	"latitude": 31.325102510979,
	"longitude": 121.29809329229,
	"create_time": "2018-07-25 14:03:13",
	"direction": 67,
	"height": 0,
	"speed": 574
}, {
	"loc_time": 1532050075,
	"latitude": 31.326796094671,
	"longitude": 121.3025393174,
	"create_time": "2018-07-25 14:03:13",
	"direction": 67,
	"height": 1,
	"speed": 534
}, {
	"loc_time": 1532050105,
	"latitude": 31.328575964994,
	"longitude": 121.30718395065,
	"create_time": "2018-07-25 14:03:13",
	"direction": 67,
	"height": 0,
	"speed": 626
}, {
	"loc_time": 1532050135,
	"latitude": 31.330442165777,
	"longitude": 121.31211170924,
	"create_time": "2018-07-25 14:03:13",
	"direction": 67,
	"height": 0,
	"speed": 598
}, {
	"loc_time": 1532050165,
	"latitude": 31.33209877054,
	"longitude": 121.31651449624,
	"create_time": "2018-07-25 14:03:13",
	"direction": 67,
	"height": 0,
	"speed": 532
}, {
	"loc_time": 1532050195,
	"latitude": 31.333710298919,
	"longitude": 121.32091342811,
	"create_time": "2018-07-25 14:03:13",
	"direction": 67,
	"height": 0,
	"speed": 570
}, {
	"loc_time": 1532050225,
	"latitude": 31.335394448266,
	"longitude": 121.32554497265,
	"create_time": "2018-07-25 14:03:17",
	"direction": 67,
	"height": 0,
	"speed": 579
}, {
	"loc_time": 1532050255,
	"latitude": 31.336816708993,
	"longitude": 121.33043916152,
	"create_time": "2018-07-25 14:03:17",
	"direction": 74,
	"height": 0,
	"speed": 603
}, {
	"loc_time": 1532050285,
	"latitude": 31.337740428497,
	"longitude": 121.33539598901,
	"create_time": "2018-07-25 14:03:17",
	"direction": 78,
	"height": 0,
	"speed": 561
}, {
	"loc_time": 1532050315,
	"latitude": 31.338570947861,
	"longitude": 121.34000317106,
	"create_time": "2018-07-25 14:03:17",
	"direction": 79,
	"height": 0,
	"speed": 515
}, {
	"loc_time": 1532050345,
	"latitude": 31.338951013978,
	"longitude": 121.34419984859,
	"create_time": "2018-07-25 14:03:17",
	"direction": 89,
	"height": 0,
	"speed": 459
}, {
	"loc_time": 1532050375,
	"latitude": 31.338604349253,
	"longitude": 121.34813296572,
	"create_time": "2018-07-25 14:03:17",
	"direction": 99,
	"height": 0,
	"speed": 465
}, {
	"loc_time": 1532050405,
	"latitude": 31.33770917423,
	"longitude": 121.35256256844,
	"create_time": "2018-07-25 14:03:17",
	"direction": 103,
	"height": 0,
	"speed": 558
}, {
	"loc_time": 1532050435,
	"latitude": 31.336923790597,
	"longitude": 121.35744797265,
	"create_time": "2018-07-25 14:03:17",
	"direction": 94,
	"height": 0,
	"speed": 531
}, {
	"loc_time": 1532050465,
	"latitude": 31.337011810135,
	"longitude": 121.36199285739,
	"create_time": "2018-07-25 14:03:17",
	"direction": 82,
	"height": 0,
	"speed": 510
}, {
	"loc_time": 1532050495,
	"latitude": 31.33788549657,
	"longitude": 121.36634648209,
	"create_time": "2018-07-25 14:03:17",
	"direction": 73,
	"height": 0,
	"speed": 499
}, {
	"loc_time": 1532050525,
	"latitude": 31.338763420078,
	"longitude": 121.37050658558,
	"create_time": "2018-07-25 14:03:17",
	"direction": 71,
	"height": 0,
	"speed": 457
}, {
	"loc_time": 1532050555,
	"latitude": 31.340311881451,
	"longitude": 121.37457851927,
	"create_time": "2018-07-25 14:03:17",
	"direction": 65,
	"height": 0,
	"speed": 550
}, {
	"loc_time": 1532050585,
	"latitude": 31.341714463136,
	"longitude": 121.37894717277,
	"create_time": "2018-07-25 14:03:17",
	"direction": 70,
	"height": 0,
	"speed": 463
}, {
	"loc_time": 1532050615,
	"latitude": 31.342956291463,
	"longitude": 121.38287971519,
	"create_time": "2018-07-25 14:03:17",
	"direction": 68,
	"height": 0,
	"speed": 546
}, {
	"loc_time": 1532050645,
	"latitude": 31.344647263743,
	"longitude": 121.38741340064,
	"create_time": "2018-07-25 14:03:17",
	"direction": 64,
	"height": 0,
	"speed": 570
}, {
	"loc_time": 1532050675,
	"latitude": 31.346840130866,
	"longitude": 121.39199122315,
	"create_time": "2018-07-25 14:03:17",
	"direction": 61,
	"height": 1,
	"speed": 603
}, {
	"loc_time": 1532050705,
	"latitude": 31.34893198942,
	"longitude": 121.39621857785,
	"create_time": "2018-07-25 14:03:17",
	"direction": 61,
	"height": 0,
	"speed": 530
}, {
	"loc_time": 1532050735,
	"latitude": 31.350892805022,
	"longitude": 121.40026076325,
	"create_time": "2018-07-25 14:03:17",
	"direction": 62,
	"height": 1,
	"speed": 505
}, {
	"loc_time": 1532050765,
	"latitude": 31.352242009492,
	"longitude": 121.40432027246,
	"create_time": "2018-07-25 14:03:17",
	"direction": 74,
	"height": 0,
	"speed": 458
}, {
	"loc_time": 1532050795,
	"latitude": 31.352986556103,
	"longitude": 121.40815399253,
	"create_time": "2018-07-25 14:03:17",
	"direction": 76,
	"height": 0,
	"speed": 501
}, {
	"loc_time": 1532050826,
	"latitude": 31.354409721703,
	"longitude": 121.4129342366,
	"create_time": "2018-07-25 14:03:17",
	"direction": 71,
	"height": 0,
	"speed": 537
}, {
	"loc_time": 1532050856,
	"latitude": 31.355742252777,
	"longitude": 121.41717637685,
	"create_time": "2018-07-25 14:03:17",
	"direction": 68,
	"height": 0,
	"speed": 499
}, {
	"loc_time": 1532050886,
	"latitude": 31.356962669843,
	"longitude": 121.42118561169,
	"create_time": "2018-07-25 14:03:17",
	"direction": 75,
	"height": 0,
	"speed": 447
}, {
	"loc_time": 1532050917,
	"latitude": 31.357864488273,
	"longitude": 121.42538568092,
	"create_time": "2018-07-25 14:03:17",
	"direction": 78,
	"height": 0,
	"speed": 521
}, {
	"loc_time": 1532050947,
	"latitude": 31.358691746784,
	"longitude": 121.42974424654,
	"create_time": "2018-07-25 14:03:17",
	"direction": 78,
	"height": 0,
	"speed": 536
}, {
	"loc_time": 1532050977,
	"latitude": 31.35958208816,
	"longitude": 121.43423763721,
	"create_time": "2018-07-25 14:03:17",
	"direction": 76,
	"height": 0,
	"speed": 480
}, {
	"loc_time": 1532051007,
	"latitude": 31.360613531837,
	"longitude": 121.43820966284,
	"create_time": "2018-07-25 14:03:17",
	"direction": 73,
	"height": 1,
	"speed": 424
}, {
	"loc_time": 1532051037,
	"latitude": 31.361455449782,
	"longitude": 121.44131809639,
	"create_time": "2018-07-25 14:03:17",
	"direction": 70,
	"height": 0,
	"speed": 244
}, {
	"loc_time": 1532051067,
	"latitude": 31.360761309833,
	"longitude": 121.44213109776,
	"create_time": "2018-07-25 14:03:17",
	"direction": 211,
	"height": 0,
	"speed": 182
}, {
	"loc_time": 1532051097,
	"latitude": 31.361702100958,
	"longitude": 121.44087104398,
	"create_time": "2018-07-25 14:03:17",
	"direction": 355,
	"height": 0,
	"speed": 357
}, {
	"loc_time": 1532051127,
	"latitude": 31.364420967134,
	"longitude": 121.44047461607,
	"create_time": "2018-07-25 14:03:17",
	"direction": 352,
	"height": 0,
	"speed": 371
}, {
	"loc_time": 1532051157,
	"latitude": 31.366943694328,
	"longitude": 121.43989543807,
	"create_time": "2018-07-25 14:03:17",
	"direction": 349,
	"height": 0,
	"speed": 218
}, {
	"loc_time": 1532051181,
	"latitude": 31.367258056984,
	"longitude": 121.43977069165,
	"create_time": "2018-07-25 14:03:17",
	"direction": 356,
	"height": 0,
	"speed": 46
}, {
	"loc_time": 1532051187,
	"latitude": 31.367182979757,
	"longitude": 121.43973742317,
	"create_time": "2018-07-25 14:03:17",
	"direction": 356,
	"height": 0,
	"speed": 49
}, {
	"loc_time": 1532051217,
	"latitude": 31.367049470878,
	"longitude": 121.43972774678,
	"create_time": "2018-07-25 14:03:17",
	"direction": 356,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532051218,
	"latitude": 31.367049470878,
	"longitude": 121.43972774678,
	"create_time": "2018-07-25 14:03:17",
	"direction": 356,
	"height": 2,
	"speed": 0
}, {
	"loc_time": 1532051248,
	"latitude": 31.367739070449,
	"longitude": 121.44063304817,
	"create_time": "2018-07-25 14:03:17",
	"direction": 220,
	"height": 1,
	"speed": 43
}, {
	"loc_time": 1532051278,
	"latitude": 31.36836620393,
	"longitude": 121.44031848463,
	"create_time": "2018-07-25 14:03:17",
	"direction": 343,
	"height": 0,
	"speed": 137
}, {
	"loc_time": 1532051308,
	"latitude": 31.369606044752,
	"longitude": 121.43993583045,
	"create_time": "2018-07-25 14:03:17",
	"direction": 352,
	"height": 0,
	"speed": 216
}, {
	"loc_time": 1532051338,
	"latitude": 31.371153472558,
	"longitude": 121.43941970094,
	"create_time": "2018-07-25 14:03:17",
	"direction": 349,
	"height": 0,
	"speed": 274
}, {
	"loc_time": 1532051368,
	"latitude": 31.372989620852,
	"longitude": 121.43874059954,
	"create_time": "2018-07-25 14:03:17",
	"direction": 351,
	"height": 1,
	"speed": 275
}, {
	"loc_time": 1532051398,
	"latitude": 31.375119110618,
	"longitude": 121.4381378539,
	"create_time": "2018-07-25 14:03:17",
	"direction": 350,
	"height": 1,
	"speed": 310
}, {
	"loc_time": 1532051428,
	"latitude": 31.377038278341,
	"longitude": 121.43778589599,
	"create_time": "2018-07-25 14:03:17",
	"direction": 352,
	"height": 0,
	"speed": 38
}, {
	"loc_time": 1532051439,
	"latitude": 31.377053709851,
	"longitude": 121.43778263389,
	"create_time": "2018-07-25 14:03:17",
	"direction": 352,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532051458,
	"latitude": 31.377056733822,
	"longitude": 121.4377875035,
	"create_time": "2018-07-25 14:03:17",
	"direction": 352,
	"height": 0,
	"speed": 57
}, {
	"loc_time": 1532051488,
	"latitude": 31.377246499,
	"longitude": 121.437745647,
	"create_time": "2018-07-25 14:03:17",
	"direction": 352,
	"height": 1,
	"speed": 5
}, {
	"loc_time": 1532051518,
	"latitude": 31.377525517734,
	"longitude": 121.43761113722,
	"create_time": "2018-07-25 14:03:17",
	"direction": 352,
	"height": 0,
	"speed": 133
}, {
	"loc_time": 1532051533,
	"latitude": 31.377665600847,
	"longitude": 121.43759585164,
	"create_time": "2018-07-25 14:03:17",
	"direction": 350,
	"height": 0,
	"speed": 7
}, {
	"loc_time": 1532051548,
	"latitude": 31.377670526355,
	"longitude": 121.43760098993,
	"create_time": "2018-07-25 14:03:17",
	"direction": 350,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532051578,
	"latitude": 31.377667357228,
	"longitude": 121.43761100777,
	"create_time": "2018-07-25 14:03:17",
	"direction": 350,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532051608,
	"latitude": 31.377647031953,
	"longitude": 121.43758098161,
	"create_time": "2018-07-25 14:03:17",
	"direction": 350,
	"height": 1,
	"speed": 6
}, {
	"loc_time": 1532051638,
	"latitude": 31.377650214696,
	"longitude": 121.43757258786,
	"create_time": "2018-07-25 14:03:17",
	"direction": 350,
	"height": 0,
	"speed": 24
}, {
	"loc_time": 1532051668,
	"latitude": 31.377671910977,
	"longitude": 121.43757256803,
	"create_time": "2018-07-25 14:03:17",
	"direction": 350,
	"height": 1,
	"speed": 4
}, {
	"loc_time": 1532051698,
	"latitude": 31.377737029879,
	"longitude": 121.43757602717,
	"create_time": "2018-07-25 14:03:17",
	"direction": 350,
	"height": 0,
	"speed": 53
}, {
	"loc_time": 1532051728,
	"latitude": 31.377971622327,
	"longitude": 121.43751274552,
	"create_time": "2018-07-25 14:03:17",
	"direction": 353,
	"height": 0,
	"speed": 32
}, {
	"loc_time": 1532051734,
	"latitude": 31.377950098204,
	"longitude": 121.43753279483,
	"create_time": "2018-07-25 14:03:17",
	"direction": 353,
	"height": 0,
	"speed": 20
}, {
	"loc_time": 1532051758,
	"latitude": 31.37796249324,
	"longitude": 121.43765052621,
	"create_time": "2018-07-25 14:03:17",
	"direction": 353,
	"height": 0,
	"speed": 9
}, {
	"loc_time": 1532051786,
	"latitude": 31.378296166225,
	"longitude": 121.43747103331,
	"create_time": "2018-07-25 14:03:17",
	"direction": 327,
	"height": 0,
	"speed": 9
}, {
	"loc_time": 1532051788,
	"latitude": 31.37829613582,
	"longitude": 121.43746751468,
	"create_time": "2018-07-25 14:03:17",
	"direction": 327,
	"height": 0,
	"speed": 2
}, {
	"loc_time": 1532051818,
	"latitude": 31.378315768924,
	"longitude": 121.43738602694,
	"create_time": "2018-07-25 14:03:17",
	"direction": 327,
	"height": 0,
	"speed": 21
}, {
	"loc_time": 1532051848,
	"latitude": 31.37876765737,
	"longitude": 121.43720805546,
	"create_time": "2018-07-25 14:03:17",
	"direction": 357,
	"height": 0,
	"speed": 48
}, {
	"loc_time": 1532051870,
	"latitude": 31.378836277118,
	"longitude": 121.43705697132,
	"create_time": "2018-07-25 14:03:17",
	"direction": 262,
	"height": 0,
	"speed": 24
}, {
	"loc_time": 1532051878,
	"latitude": 31.378846669268,
	"longitude": 121.4370967458,
	"create_time": "2018-07-25 14:03:17",
	"direction": 262,
	"height": 0,
	"speed": 29
}, {
	"loc_time": 1532051908,
	"latitude": 31.379237416252,
	"longitude": 121.43718135949,
	"create_time": "2018-07-25 14:03:17",
	"direction": 353,
	"height": 0,
	"speed": 2
}, {
	"loc_time": 1532051914,
	"latitude": 31.379237430699,
	"longitude": 121.43718298336,
	"create_time": "2018-07-25 14:03:17",
	"direction": 353,
	"height": 0,
	"speed": 5
}, {
	"loc_time": 1532051938,
	"latitude": 31.379292109734,
	"longitude": 121.43717129367,
	"create_time": "2018-07-25 14:03:17",
	"direction": 353,
	"height": 1,
	"speed": 58
}, {
	"loc_time": 1532051968,
	"latitude": 31.380112731617,
	"longitude": 121.43701597207,
	"create_time": "2018-07-25 14:03:17",
	"direction": 354,
	"height": 0,
	"speed": 14
}, {
	"loc_time": 1532051975,
	"latitude": 31.380161232352,
	"longitude": 121.43701105384,
	"create_time": "2018-07-25 14:03:17",
	"direction": 354,
	"height": 0,
	"speed": 36
}, {
	"loc_time": 1532051998,
	"latitude": 31.380365684677,
	"longitude": 121.43694752764,
	"create_time": "2018-07-25 14:03:17",
	"direction": 345,
	"height": 0,
	"speed": 112
}, {
	"loc_time": 1532052002,
	"latitude": 31.380442239346,
	"longitude": 121.43692607352,
	"create_time": "2018-07-25 14:03:17",
	"direction": 346,
	"height": 0,
	"speed": 6
}, {
	"loc_time": 1532052028,
	"latitude": 31.380450735375,
	"longitude": 121.43693580805,
	"create_time": "2018-07-25 14:03:17",
	"direction": 346,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532052058,
	"latitude": 31.380455769774,
	"longitude": 121.43695258242,
	"create_time": "2018-07-25 14:03:17",
	"direction": 346,
	"height": 0,
	"speed": 16
}, {
	"loc_time": 1532052088,
	"latitude": 31.380502083066,
	"longitude": 121.43691600212,
	"create_time": "2018-07-25 14:03:17",
	"direction": 346,
	"height": 0,
	"speed": 5
}, {
	"loc_time": 1532052118,
	"latitude": 31.380512494808,
	"longitude": 121.43695739882,
	"create_time": "2018-07-25 14:03:17",
	"direction": 346,
	"height": 0,
	"speed": 22
}, {
	"loc_time": 1532052144,
	"latitude": 31.380740257088,
	"longitude": 121.43689276701,
	"create_time": "2018-07-25 14:03:17",
	"direction": 345,
	"height": 0,
	"speed": 7
}, {
	"loc_time": 1532052148,
	"latitude": 31.380755081364,
	"longitude": 121.43688273928,
	"create_time": "2018-07-25 14:03:17",
	"direction": 345,
	"height": 0,
	"speed": 30
}, {
	"loc_time": 1532052178,
	"latitude": 31.380936366822,
	"longitude": 121.43680759874,
	"create_time": "2018-07-25 14:03:17",
	"direction": 345,
	"height": 1,
	"speed": 32
}, {
	"loc_time": 1532052208,
	"latitude": 31.381079314895,
	"longitude": 121.43678093782,
	"create_time": "2018-07-25 14:03:17",
	"direction": 345,
	"height": 1,
	"speed": 25
}, {
	"loc_time": 1532052238,
	"latitude": 31.381104187564,
	"longitude": 121.43677252415,
	"create_time": "2018-07-25 14:03:17",
	"direction": 345,
	"height": 0,
	"speed": 6
}, {
	"loc_time": 1532052268,
	"latitude": 31.381183867515,
	"longitude": 121.4367375359,
	"create_time": "2018-07-25 14:03:17",
	"direction": 345,
	"height": 1,
	"speed": 4
}, {
	"loc_time": 1532052298,
	"latitude": 31.381203828085,
	"longitude": 121.43672587966,
	"create_time": "2018-07-25 14:03:17",
	"direction": 345,
	"height": 0,
	"speed": 5
}, {
	"loc_time": 1532052328,
	"latitude": 31.381224128035,
	"longitude": 121.43675075685,
	"create_time": "2018-07-25 14:03:17",
	"direction": 345,
	"height": 0,
	"speed": 28
}, {
	"loc_time": 1532052358,
	"latitude": 31.381351014962,
	"longitude": 121.43680556874,
	"create_time": "2018-07-25 14:03:17",
	"direction": 349,
	"height": 1,
	"speed": 88
}, {
	"loc_time": 1532052388,
	"latitude": 31.381837627754,
	"longitude": 121.43655260334,
	"create_time": "2018-07-25 14:03:17",
	"direction": 348,
	"height": 1,
	"speed": 29
}, {
	"loc_time": 1532052394,
	"latitude": 31.381888953195,
	"longitude": 121.43653117448,
	"create_time": "2018-07-25 14:03:17",
	"direction": 348,
	"height": 1,
	"speed": 44
}, {
	"loc_time": 1532052418,
	"latitude": 31.381967093464,
	"longitude": 121.43650620124,
	"create_time": "2018-07-25 14:03:17",
	"direction": 348,
	"height": 1,
	"speed": 51
}, {
	"loc_time": 1532052448,
	"latitude": 31.382810942814,
	"longitude": 121.4363511183,
	"create_time": "2018-07-25 14:03:17",
	"direction": 349,
	"height": 0,
	"speed": 134
}, {
	"loc_time": 1532052468,
	"latitude": 31.383070026061,
	"longitude": 121.43627590418,
	"create_time": "2018-07-25 14:03:17",
	"direction": 354,
	"height": 1,
	"speed": 3
}, {
	"loc_time": 1532052478,
	"latitude": 31.38306521004,
	"longitude": 121.43628267383,
	"create_time": "2018-07-25 14:03:17",
	"direction": 354,
	"height": 0,
	"speed": 14
}, {
	"loc_time": 1532052508,
	"latitude": 31.383089384408,
	"longitude": 121.43620282536,
	"create_time": "2018-07-25 14:03:17",
	"direction": 354,
	"height": 0,
	"speed": 21
}, {
	"loc_time": 1532052538,
	"latitude": 31.383064563496,
	"longitude": 121.43621610908,
	"create_time": "2018-07-25 14:03:17",
	"direction": 354,
	"height": 1,
	"speed": 49
}, {
	"loc_time": 1532052568,
	"latitude": 31.383468531522,
	"longitude": 121.43609312839,
	"create_time": "2018-07-25 14:03:17",
	"direction": 354,
	"height": 2,
	"speed": 147
}, {
	"loc_time": 1532052598,
	"latitude": 31.385244948282,
	"longitude": 121.43566653901,
	"create_time": "2018-07-25 14:03:17",
	"direction": 350,
	"height": 1,
	"speed": 128
}, {
	"loc_time": 1532052617,
	"latitude": 31.385524055253,
	"longitude": 121.43559131207,
	"create_time": "2018-07-25 14:03:17",
	"direction": 350,
	"height": 1,
	"speed": 24
}, {
	"loc_time": 1532052628,
	"latitude": 31.385518799619,
	"longitude": 121.435581307,
	"create_time": "2018-07-25 14:03:17",
	"direction": 350,
	"height": 1,
	"speed": 20
}, {
	"loc_time": 1532052658,
	"latitude": 31.385560131945,
	"longitude": 121.43551308657,
	"create_time": "2018-07-25 14:03:17",
	"direction": 350,
	"height": 0,
	"speed": 13
}, {
	"loc_time": 1532052688,
	"latitude": 31.385623492357,
	"longitude": 121.43534717966,
	"create_time": "2018-07-25 14:03:17",
	"direction": 350,
	"height": 1,
	"speed": 28
}, {
	"loc_time": 1532052718,
	"latitude": 31.385618679549,
	"longitude": 121.43553629422,
	"create_time": "2018-07-25 14:03:17",
	"direction": 350,
	"height": 1,
	"speed": 26
}, {
	"loc_time": 1532052748,
	"latitude": 31.385572129824,
	"longitude": 121.43538889482,
	"create_time": "2018-07-25 14:03:17",
	"direction": 350,
	"height": 2,
	"speed": 29
}, {
	"loc_time": 1532052778,
	"latitude": 31.38690920882,
	"longitude": 121.43506208751,
	"create_time": "2018-07-25 14:03:20",
	"direction": 350,
	"height": 1,
	"speed": 226
}, {
	"loc_time": 1532052808,
	"latitude": 31.388678923528,
	"longitude": 121.43452929175,
	"create_time": "2018-07-25 14:03:20",
	"direction": 345,
	"height": 1,
	"speed": 288
}, {
	"loc_time": 1532052838,
	"latitude": 31.38892507571,
	"longitude": 121.43267491312,
	"create_time": "2018-07-25 14:03:20",
	"direction": 247,
	"height": 1,
	"speed": 428
}, {
	"loc_time": 1532052868,
	"latitude": 31.387863238968,
	"longitude": 121.43016384968,
	"create_time": "2018-07-25 14:03:20",
	"direction": 234,
	"height": 1,
	"speed": 7
}, {
	"loc_time": 1532052875,
	"latitude": 31.387868368334,
	"longitude": 121.4301622229,
	"create_time": "2018-07-25 14:03:20",
	"direction": 234,
	"height": 1,
	"speed": 21
}, {
	"loc_time": 1532052898,
	"latitude": 31.387435913342,
	"longitude": 121.429411102,
	"create_time": "2018-07-25 14:03:20",
	"direction": 245,
	"height": 1,
	"speed": 340
}, {
	"loc_time": 1532052928,
	"latitude": 31.386110473248,
	"longitude": 121.42630255066,
	"create_time": "2018-07-25 14:03:20",
	"direction": 242,
	"height": 1,
	"speed": 401
}, {
	"loc_time": 1532052958,
	"latitude": 31.384793606885,
	"longitude": 121.42321439381,
	"create_time": "2018-07-25 14:03:20",
	"direction": 244,
	"height": 0,
	"speed": 171
}, {
	"loc_time": 1532052974,
	"latitude": 31.384766601075,
	"longitude": 121.42310020424,
	"create_time": "2018-07-25 14:03:20",
	"direction": 247,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532052988,
	"latitude": 31.384779651276,
	"longitude": 121.4230869603,
	"create_time": "2018-07-25 14:03:20",
	"direction": 247,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532053018,
	"latitude": 31.384452614399,
	"longitude": 121.42243063392,
	"create_time": "2018-07-25 14:03:20",
	"direction": 226,
	"height": 1,
	"speed": 48
}, {
	"loc_time": 1532053036,
	"latitude": 31.38439643826,
	"longitude": 121.422354281,
	"create_time": "2018-07-25 14:03:20",
	"direction": 226,
	"height": 0,
	"speed": 18
}, {
	"loc_time": 1532053048,
	"latitude": 31.384387942413,
	"longitude": 121.42234942963,
	"create_time": "2018-07-25 14:03:20",
	"direction": 226,
	"height": 1,
	"speed": 17
}, {
	"loc_time": 1532053078,
	"latitude": 31.384411901218,
	"longitude": 121.4223842352,
	"create_time": "2018-07-25 14:03:20",
	"direction": 226,
	"height": 1,
	"speed": 42
}, {
	"loc_time": 1532053108,
	"latitude": 31.384410717853,
	"longitude": 121.42231943685,
	"create_time": "2018-07-25 14:03:20",
	"direction": 246,
	"height": 0,
	"speed": 83
}, {
	"loc_time": 1532053138,
	"latitude": 31.383570109601,
	"longitude": 121.42256382486,
	"create_time": "2018-07-25 14:03:20",
	"direction": 151,
	"height": 0,
	"speed": 89
}, {
	"loc_time": 1532053152,
	"latitude": 31.383495832743,
	"longitude": 121.42261034012,
	"create_time": "2018-07-25 14:03:20",
	"direction": 147,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532053168,
	"latitude": 31.383493093699,
	"longitude": 121.4226386933,
	"create_time": "2018-07-25 14:03:20",
	"direction": 147,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532053198,
	"latitude": 31.383497069077,
	"longitude": 121.42267838001,
	"create_time": "2018-07-25 14:03:20",
	"direction": 147,
	"height": 1,
	"speed": 14
}, {
	"loc_time": 1532053228,
	"latitude": 31.383486977423,
	"longitude": 121.42266029982,
	"create_time": "2018-07-25 14:03:20",
	"direction": 147,
	"height": 0,
	"speed": 5
}, {
	"loc_time": 1532053258,
	"latitude": 31.383372862567,
	"longitude": 121.42270847547,
	"create_time": "2018-07-25 14:03:20",
	"direction": 147,
	"height": 0,
	"speed": 4
}, {
	"loc_time": 1532053288,
	"latitude": 31.383364274123,
	"longitude": 121.42269849388,
	"create_time": "2018-07-25 14:03:20",
	"direction": 147,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532053318,
	"latitude": 31.38336439175,
	"longitude": 121.4227049739,
	"create_time": "2018-07-25 14:03:20",
	"direction": 147,
	"height": 0,
	"speed": 3
}, {
	"loc_time": 1532053348,
	"latitude": 31.383347490907,
	"longitude": 121.42268528047,
	"create_time": "2018-07-25 14:03:20",
	"direction": 147,
	"height": 0,
	"speed": 1
}, {
	"loc_time": 1532053378,
	"latitude": 31.383347128053,
	"longitude": 121.42266530045,
	"create_time": "2018-07-25 14:03:20",
	"direction": 147,
	"height": 0,
	"speed": 3
}, {
	"loc_time": 1532053408,
	"latitude": 31.383337152612,
	"longitude": 121.42266855053,
	"create_time": "2018-07-25 14:03:20",
	"direction": 147,
	"height": 0,
	"speed": 1
}, {
	"loc_time": 1532053438,
	"latitude": 31.383333656475,
	"longitude": 121.42267017408,
	"create_time": "2018-07-25 14:03:20",
	"direction": 147,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532053468,
	"latitude": 31.383337456616,
	"longitude": 121.42268529055,
	"create_time": "2018-07-25 14:03:20",
	"direction": 147,
	"height": 0,
	"speed": 5
}, {
	"loc_time": 1532053498,
	"latitude": 31.383342308747,
	"longitude": 121.42268366565,
	"create_time": "2018-07-25 14:03:20",
	"direction": 147,
	"height": 1,
	"speed": 6
}, {
	"loc_time": 1532053528,
	"latitude": 31.383322598,
	"longitude": 121.42270339585,
	"create_time": "2018-07-25 14:03:20",
	"direction": 147,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532053558,
	"latitude": 31.383322598,
	"longitude": 121.42270339585,
	"create_time": "2018-07-25 14:03:20",
	"direction": 147,
	"height": 0,
	"speed": 3
}, {
	"loc_time": 1532053588,
	"latitude": 31.383324315027,
	"longitude": 121.42269340391,
	"create_time": "2018-07-25 14:03:20",
	"direction": 147,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532053618,
	"latitude": 31.383312653554,
	"longitude": 121.42269341563,
	"create_time": "2018-07-25 14:03:20",
	"direction": 147,
	"height": 0,
	"speed": 4
}, {
	"loc_time": 1532053648,
	"latitude": 31.383317388035,
	"longitude": 121.42268531071,
	"create_time": "2018-07-25 14:03:20",
	"direction": 147,
	"height": 0,
	"speed": 2
}, {
	"loc_time": 1532053678,
	"latitude": 31.383317446864,
	"longitude": 121.42268855071,
	"create_time": "2018-07-25 14:03:20",
	"direction": 147,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532053708,
	"latitude": 31.383322240166,
	"longitude": 121.4226836858,
	"create_time": "2018-07-25 14:03:20",
	"direction": 147,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532053738,
	"latitude": 31.383445264033,
	"longitude": 121.42284259641,
	"create_time": "2018-07-25 14:03:20",
	"direction": 42,
	"height": 0,
	"speed": 124
}, {
	"loc_time": 1532053763,
	"latitude": 31.383765028427,
	"longitude": 121.42330993964,
	"create_time": "2018-07-25 14:03:20",
	"direction": 65,
	"height": 0,
	"speed": 28
}, {
	"loc_time": 1532053768,
	"latitude": 31.383778079607,
	"longitude": 121.42329669551,
	"create_time": "2018-07-25 14:03:20",
	"direction": 65,
	"height": 0,
	"speed": 13
}, {
	"loc_time": 1532053798,
	"latitude": 31.383940222774,
	"longitude": 121.42361299981,
	"create_time": "2018-07-25 14:03:20",
	"direction": 60,
	"height": 0,
	"speed": 64
}, {
	"loc_time": 1532053824,
	"latitude": 31.383939415525,
	"longitude": 121.4238419866,
	"create_time": "2018-07-25 14:03:20",
	"direction": 96,
	"height": 0,
	"speed": 22
}, {
	"loc_time": 1532053828,
	"latitude": 31.383934168911,
	"longitude": 121.42385198314,
	"create_time": "2018-07-25 14:03:20",
	"direction": 96,
	"height": 0,
	"speed": 25
}, {
	"loc_time": 1532053846,
	"latitude": 31.384011449694,
	"longitude": 121.42406577428,
	"create_time": "2018-07-25 14:03:20",
	"direction": 59,
	"height": 0,
	"speed": 37
}, {
	"loc_time": 1532053858,
	"latitude": 31.383916577681,
	"longitude": 121.42397648727,
	"create_time": "2018-07-25 14:03:20",
	"direction": 233,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532053888,
	"latitude": 31.383909797762,
	"longitude": 121.4239764941,
	"create_time": "2018-07-25 14:03:20",
	"direction": 233,
	"height": 0,
	"speed": 7
}, {
	"loc_time": 1532053918,
	"latitude": 31.383825825505,
	"longitude": 121.42373759865,
	"create_time": "2018-07-25 14:03:20",
	"direction": 233,
	"height": 1,
	"speed": 5
}, {
	"loc_time": 1532053948,
	"latitude": 31.383785460907,
	"longitude": 121.42361828635,
	"create_time": "2018-07-25 14:03:20",
	"direction": 241,
	"height": 0,
	"speed": 71
}, {
	"loc_time": 1532053978,
	"latitude": 31.383516048175,
	"longitude": 121.42279770383,
	"create_time": "2018-07-25 14:03:20",
	"direction": 275,
	"height": 0,
	"speed": 11
}, {
	"loc_time": 1532053981,
	"latitude": 31.383519302539,
	"longitude": 121.42279770056,
	"create_time": "2018-07-25 14:03:20",
	"direction": 275,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532054008,
	"latitude": 31.38352092972,
	"longitude": 121.42279769892,
	"create_time": "2018-07-25 14:03:20",
	"direction": 275,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532054038,
	"latitude": 31.383513549718,
	"longitude": 121.42274964503,
	"create_time": "2018-07-25 14:03:20",
	"direction": 275,
	"height": 0,
	"speed": 20
}, {
	"loc_time": 1532054068,
	"latitude": 31.38361506933,
	"longitude": 121.42256053958,
	"create_time": "2018-07-25 14:03:20",
	"direction": 351,
	"height": 0,
	"speed": 121
}, {
	"loc_time": 1532054098,
	"latitude": 31.384102977899,
	"longitude": 121.42328151676,
	"create_time": "2018-07-25 14:03:20",
	"direction": 60,
	"height": 0,
	"speed": 100
}, {
	"loc_time": 1532054128,
	"latitude": 31.384505674835,
	"longitude": 121.42450328899,
	"create_time": "2018-07-25 14:03:20",
	"direction": 72,
	"height": 0,
	"speed": 211
}, {
	"loc_time": 1532054158,
	"latitude": 31.384790898799,
	"longitude": 121.42540825892,
	"create_time": "2018-07-25 14:03:20",
	"direction": 74,
	"height": 1,
	"speed": 27
}, {
	"loc_time": 1532054160,
	"latitude": 31.38478408071,
	"longitude": 121.42539017055,
	"create_time": "2018-07-25 14:03:20",
	"direction": 74,
	"height": 1,
	"speed": 27
}, {
	"loc_time": 1532054188,
	"latitude": 31.384759395756,
	"longitude": 121.42512120153,
	"create_time": "2018-07-25 14:03:20",
	"direction": 74,
	"height": 1,
	"speed": 10
}, {
	"loc_time": 1532054218,
	"latitude": 31.384692678739,
	"longitude": 121.42502674504,
	"create_time": "2018-07-25 14:03:20",
	"direction": 74,
	"height": 1,
	"speed": 19
}, {
	"loc_time": 1532054248,
	"latitude": 31.384849405074,
	"longitude": 121.42511948994,
	"create_time": "2018-07-25 14:03:20",
	"direction": 74,
	"height": 0,
	"speed": 12
}, {
	"loc_time": 1532054278,
	"latitude": 31.384916278392,
	"longitude": 121.42523906405,
	"create_time": "2018-07-25 14:03:20",
	"direction": 74,
	"height": 1,
	"speed": 23
}, {
	"loc_time": 1532054308,
	"latitude": 31.384958886943,
	"longitude": 121.42538324148,
	"create_time": "2018-07-25 14:03:20",
	"direction": 74,
	"height": 1,
	"speed": 4
}, {
	"loc_time": 1532054338,
	"latitude": 31.384964193329,
	"longitude": 121.42540808334,
	"create_time": "2018-07-25 14:03:20",
	"direction": 74,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532054368,
	"latitude": 31.384964221026,
	"longitude": 121.42540970379,
	"create_time": "2018-07-25 14:03:20",
	"direction": 74,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532054398,
	"latitude": 31.384985551957,
	"longitude": 121.42538834594,
	"create_time": "2018-07-25 14:03:20",
	"direction": 74,
	"height": 1,
	"speed": 4
}, {
	"loc_time": 1532054428,
	"latitude": 31.385006045283,
	"longitude": 121.42541317242,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 0,
	"speed": 39
}, {
	"loc_time": 1532054458,
	"latitude": 31.385014623133,
	"longitude": 121.42542315667,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 0,
	"speed": 7
}, {
	"loc_time": 1532054488,
	"latitude": 31.385004501183,
	"longitude": 121.42541803542,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532054518,
	"latitude": 31.384990858284,
	"longitude": 121.42541318782,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 10
}, {
	"loc_time": 1532054548,
	"latitude": 31.384989231105,
	"longitude": 121.42541318947,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532054578,
	"latitude": 31.384989143399,
	"longitude": 121.42540805805,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 9
}, {
	"loc_time": 1532054608,
	"latitude": 31.385004588865,
	"longitude": 121.42542316684,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532054638,
	"latitude": 31.385009470401,
	"longitude": 121.42542316189,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 7
}, {
	"loc_time": 1532054668,
	"latitude": 31.385009498087,
	"longitude": 121.42542478234,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532054698,
	"latitude": 31.385011009897,
	"longitude": 121.42541802882,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 5
}, {
	"loc_time": 1532054728,
	"latitude": 31.385014650819,
	"longitude": 121.42542477712,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532054758,
	"latitude": 31.385024639953,
	"longitude": 121.4254380009,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 0,
	"speed": 8
}, {
	"loc_time": 1532054788,
	"latitude": 31.385024552306,
	"longitude": 121.42543286947,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 0,
	"speed": 10
}, {
	"loc_time": 1532054818,
	"latitude": 31.385024810601,
	"longitude": 121.4254479937,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 4
}, {
	"loc_time": 1532054848,
	"latitude": 31.38502146862,
	"longitude": 121.42544286556,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 1
}, {
	"loc_time": 1532054878,
	"latitude": 31.385009894798,
	"longitude": 121.42544800882,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 2
}, {
	"loc_time": 1532054908,
	"latitude": 31.385019929066,
	"longitude": 121.42544799865,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532054938,
	"latitude": 31.385024893602,
	"longitude": 121.42545285506,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 8
}, {
	"loc_time": 1532054968,
	"latitude": 31.385019956734,
	"longitude": 121.4254496191,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 4
}, {
	"loc_time": 1532054999,
	"latitude": 31.385016614756,
	"longitude": 121.42544449096,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532055029,
	"latitude": 31.385014987578,
	"longitude": 121.42544449261,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 0,
	"speed": 0
}, {
	"loc_time": 1532055059,
	"latitude": 31.385009751826,
	"longitude": 121.42543963647,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 3
}, {
	"loc_time": 1532055089,
	"latitude": 31.38500478726,
	"longitude": 121.42543478007,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532055119,
	"latitude": 31.38501967077,
	"longitude": 121.42543287442,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 11
}, {
	"loc_time": 1532055149,
	"latitude": 31.385024810601,
	"longitude": 121.4254479937,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532055179,
	"latitude": 31.385016674709,
	"longitude": 121.42544800194,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 6
}, {
	"loc_time": 1532055209,
	"latitude": 31.385061891575,
	"longitude": 121.42545956957,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 0,
	"speed": 9
}, {
	"loc_time": 1532055239,
	"latitude": 31.385097438089,
	"longitude": 121.42549248344,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 10
}, {
	"loc_time": 1532055269,
	"latitude": 31.385090768713,
	"longitude": 121.42549897217,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 5
}, {
	"loc_time": 1532055299,
	"latitude": 31.3850856062,
	"longitude": 121.42548250242,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 10
}, {
	"loc_time": 1532055329,
	"latitude": 31.385045381589,
	"longitude": 121.42547741165,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 7
}, {
	"loc_time": 1532055359,
	"latitude": 31.385060159141,
	"longitude": 121.42546929424,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 1
}, {
	"loc_time": 1532055361,
	"latitude": 31.385060159141,
	"longitude": 121.42546929424,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 0,
	"speed": 13
}, {
	"loc_time": 1532055389,
	"latitude": 31.385090598298,
	"longitude": 121.42548897931,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 0,
	"speed": 9
}, {
	"loc_time": 1532055419,
	"latitude": 31.385056987738,
	"longitude": 121.42547415891,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 7
}, {
	"loc_time": 1532055449,
	"latitude": 31.385060048519,
	"longitude": 121.42546281241,
	"create_time": "2018-07-25 14:03:20",
	"direction": 43,
	"height": 1,
	"speed": 2
}, {
	"loc_time": 1532055479,
	"latitude": 31.385044791511,
	"longitude": 121.42544284192,
	"create_time": "2018-07-25 14:03:23",
	"direction": 43,
	"height": 1,
	"speed": 0
}, {
	"loc_time": 1532055509,
	"latitude": 31.385044736163,
	"longitude": 121.42543960101,
	"create_time": "2018-07-25 14:03:23",
	"direction": 43,
	"height": 1,
	"speed": 4
}]
    }
  },
  created() {
     global.__uri = (uri) => { return '../' + uri };

  },
  mounted() {
    //  $script(['../static/javascript/jquery.min.js'], () => {

$script(['http://api.map.baidu.com/api?v=2.0&ak=&callback=mapControl.initMap'])
      // });
//      $script(['../static/javascript/jquery.min.js'], () => {
//       $script(['../static/bootstrap/js/bootstrap.min.js',
//       '../static/icheck-1.x/icheck.min.js',
//        '../static/javascript/jquery.cookie.js'], () => {
//         $script([
//           '../static/bootstrap/js/bootstrap-datetimepicker.min.js',], () => {
//             $script([
//               '../static/bootstrap/js/bootstrap-datetimepicker.zh-CN.js',
//               // '../static/javascript/Polyfill.js?2',
//       // '../static/javascript/mod.js',
//       // '../static/javascript/reflux.min.js',
//       // '../script/modules/common/views/manager_content.js',
//       // '../script/common/mapControl.js',
//       'http://api.map.baidu.com/api?v=2.0&ak=&callback=mapControl.initMap',], () => {

// // console.log(ManagerContent)
//                    render(
//                     React.createElement(ManagerContent),
//                     this.$refs.Manager_content
//                   );

//               });
//           });
//       });
//     })
   
 render(
                    React.createElement(ManagerContent),
                    this.$refs.Manager_content
                  );

this.$nextTick(()=>{
// $script([
//     ],()=>{
//       console.log(this.$refs.Manager_content)
//     //   render(
//     //   React.createElement(ManagerContent),
//     //   this.$refs.Manager_content
//     // );

//     })
//     console.log(100)

   
},5000)

setTimeout(()=>{
   TrackStore.setTrackData(this.locations)
// window.mapControl.selecttrack();
},3000)
    
  }
}
</script>

<style>
/* @import url(../static/bootstrap/css/bootstrap.css); */
/* @import url(../static/bootstrap/css/bootstrap-datetimepicker.min.css); */
/* @import url(../static/css/normalize.css); */
@import url(../static/css/common.css);
@import url(../static/css/animate.css);
/* @import url(../static/icheck-1.x/square/blue.css); */
</style>
