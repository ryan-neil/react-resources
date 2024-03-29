const spots = [
	{
		name: 'Secret Spot',
		id: 1,
		slug: 'secret-spot',
		noaa_station_id: 1617760,
		lat: 18.9662,
		lon: -155.6118,
		facing: 'SE',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Secret Spot',
			state: "Hawai'i",
			county: 'Big Island',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'SE',
			wind: 'NW',
			surf_height: 'N/A',
			tide: 'Low to medium'
		}
	},
	{
		name: 'South Point',
		id: 2,
		slug: 'south-point',
		noaa_station_id: 1617760,
		lat: 18.8943,
		lon: -155.6626,
		facing: 'S',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Hawaiian Ocean View',
			state: "Hawai'i",
			county: 'Big Island',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'S',
			wind: 'N',
			surf_height: '4ft to 8ft',
			tide: 'Low to medium'
		}
	},
	{
		name: 'Bay Front',
		id: 3,
		slug: 'bay-front',
		noaa_station_id: 1617760,
		lat: 19.7283,
		lon: -155.0848,
		facing: 'NW',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Hilo',
			state: "Hawai'i",
			county: 'Big Island',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'NW',
			wind: 'SE',
			surf_height: '3ft to 6ft',
			tide: 'Low to medium to high'
		}
	},
	{
		name: 'Banyans',
		id: 4,
		slug: 'banyans',
		noaa_station_id: 1617433,
		lat: 19.606,
		lon: -155.9778,
		facing: 'SW',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Holualoa',
			state: "Hawai'i",
			county: 'Big Island',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'S to NW',
			wind: 'E',
			surf_height: '6ft to 8ft+',
			tide: 'Medium to high'
		}
	},
	{
		name: "Honl's",
		id: 5,
		slug: 'honls',
		noaa_station_id: 1617433,
		lat: 19.6279,
		lon: -155.9888,
		facing: 'SW',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Kahaluu-Keauhou',
			state: "Hawai'i",
			county: 'Big Island',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'SW',
			wind: 'NE',
			surf_height: '3ft to 6ft',
			tide: 'Medium to high'
		}
	},
	{
		name: "Kahalu'u Bay",
		id: 6,
		slug: 'kahalu-u-bay',
		noaa_station_id: 1617433,
		lat: 19.5809,
		lon: -155.9691,
		facing: 'W',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Kahaluu-Keauhou',
			state: "Hawai'i",
			county: 'Big Island',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'S to NW',
			wind: 'E',
			surf_height: '3ft to 6ft+',
			tide: 'Medium'
		}
	},
	{
		name: "Lyman's",
		id: 7,
		slug: 'lymans',
		noaa_station_id: 1617433,
		lat: 19.6026,
		lon: -155.9765,
		facing: 'W',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Kahaluu-Keauhou',
			state: "Hawai'i",
			county: 'Big Island',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'S to NW',
			wind: 'E',
			surf_height: '3ft to 6ft',
			tide: 'Medium to high'
		}
	},
	{
		name: 'Magic Sands Beach',
		id: 8,
		slug: 'magic-sands-beach',
		noaa_station_id: 1617433,
		lat: 19.5941,
		lon: -155.9723,
		facing: 'SW',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Kahaluu-Keauhou',
			state: "Hawai'i",
			county: 'Big Island',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'S to NW',
			wind: 'E',
			surf_height: '4ft to 8ft',
			tide: 'All tides'
		}
	},
	{
		name: 'Kaiwi Point',
		id: 9,
		slug: 'kaiwi-point',
		noaa_station_id: 1617433,
		lat: 19.6623,
		lon: -156.0357,
		facing: 'NW',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Kalaoa',
			state: "Hawai'i",
			county: 'Big Island',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'NW',
			wind: 'SE',
			surf_height: '3ft to 6ft',
			tide: 'Medium'
		}
	},
	{
		name: 'Pinetrees',
		id: 10,
		slug: 'pinetrees',
		noaa_station_id: 1617433,
		lat: 19.6951,
		lon: -156.046,
		facing: 'W',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Kalaoa',
			state: "Hawai'i",
			county: 'Big Island',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'S to NW',
			wind: 'E',
			surf_height: '4ft to 7ft',
			tide: 'Medium'
		}
	},
	{
		name: 'Pohoiki',
		id: 11,
		slug: 'pohoiki',
		noaa_station_id: 1617760,
		lat: 19.4568,
		lon: -154.843,
		facing: 'SE',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Leilani Estates',
			state: "Hawai'i",
			county: 'Big Island',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'E',
			wind: 'NW',
			surf_height: '4ft to 8ft',
			tide: 'Medium'
		}
	},
	{
		name: 'Kolekole',
		id: 12,
		slug: 'kolekole',
		noaa_station_id: 1617760,
		lat: 19.8831,
		lon: -155.1187,
		facing: 'NE',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Pepeekeo',
			state: "Hawai'i",
			county: 'Big Island',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'N to SE',
			wind: 'W',
			surf_height: '6ft to 8ft',
			tide: 'Medium'
		}
	},
	{
		name: 'Hapuna Bay',
		id: 13,
		slug: 'hapuna-bay',
		noaa_station_id: 1617433,
		lat: 19.9935,
		lon: -155.8267,
		facing: 'W',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Waikoloa Village',
			state: "Hawai'i",
			county: 'Big Island',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'W',
			wind: 'E',
			surf_height: '6ft to 8ft',
			tide: 'All tides'
		}
	},
	{
		name: 'Kawaihae',
		id: 14,
		slug: 'kawaihae',
		noaa_station_id: 1617433,
		lat: 20.0297,
		lon: -155.8317,
		facing: 'W',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Waikoloa Village',
			state: "Hawai'i",
			county: 'Big Island',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'W',
			wind: 'E',
			surf_height: '4ft to 8ft',
			tide: 'Medium'
		}
	},
	{
		name: "Honoli'i",
		id: 15,
		slug: 'honoli-i',
		noaa_station_id: 1617760,
		lat: 19.7558,
		lon: -155.0908,
		facing: 'E',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Wainaku',
			state: "Hawai'i",
			county: 'Big Island',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'N to SE',
			wind: 'W',
			surf_height: '3ft to 8ft',
			tide: 'Low to medium'
		}
	},
	{
		name: 'Tombstones',
		id: 16,
		slug: 'tombstones',
		noaa_station_id: 1617760,
		lat: 19.7616,
		lon: -155.0889,
		facing: 'E',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Wainaku',
			state: "Hawai'i",
			county: 'Big Island',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'N to SE',
			wind: 'W',
			surf_height: '6ft to 10ft',
			tide: 'Low to medium'
		}
	},
	{
		name: 'Peahi (Jaws)',
		id: 17,
		slug: 'peahi-jaws',
		noaa_station_id: 1615680,
		lat: 20.9426,
		lon: -156.3015,
		facing: 'N',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Haiku-Pauwela',
			state: "Hawai'i",
			county: 'Maui',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'N',
			wind: 'ESE',
			surf_height: '4X overhead+',
			tide: 'All tides'
		}
	},
	{
		name: 'Hana Bay',
		id: 18,
		slug: 'hana-bay',
		noaa_station_id: 1615680,
		lat: 20.7602,
		lon: -155.9829,
		facing: 'E',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Hana',
			state: "Hawai'i",
			county: 'Maui',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'E',
			wind: 'W',
			surf_height: "4' to 8'",
			tide: 'Medium to high'
		}
	},
	{
		name: 'Rainbows',
		id: 19,
		slug: 'rainbows',
		noaa_station_id: 1615680,
		lat: 20.9463,
		lon: -156.6937,
		facing: 'NW',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Kaanapali Landing',
			state: "Hawai'i",
			county: 'Maui',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'N',
			wind: 'SE',
			surf_height: "3' to 8'",
			tide: 'Medium'
		}
	},
	{
		name: 'Kahului Harbor',
		id: 20,
		slug: 'kahului-harbor',
		noaa_station_id: 1615680,
		lat: 20.9018,
		lon: -156.4674,
		facing: 'N',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Kahului',
			state: "Hawai'i",
			county: 'Maui',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'N',
			wind: 'S',
			surf_height: "4' to 6'",
			tide: 'Low'
		}
	},
	{
		name: 'Kanaha',
		id: 21,
		slug: 'Kanaha',
		noaa_station_id: 1615680,
		lat: 20.9038,
		lon: -156.4418,
		facing: 'NW',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Kahului',
			state: "Hawai'i",
			county: 'Maui',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'NW',
			wind: 'SE',
			surf_height: "3' to 6'",
			tide: 'Medium to high'
		}
	},
	{
		name: "Ma'alaea Harbor",
		id: 22,
		slug: 'Ma-alaea-harbor',
		noaa_station_id: 1615680,
		lat: 20.7901,
		lon: -156.5099,
		facing: 'SE',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Kīhei',
			state: "Hawai'i",
			county: 'Maui',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'S',
			wind: 'NW',
			surf_height: "3' to 6'",
			tide: 'Medium to high'
		}
	},
	{
		name: 'The Cove',
		id: 23,
		slug: 'the-cove',
		noaa_station_id: 1615680,
		lat: 20.7266,
		lon: -156.4516,
		facing: 'SW',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Kīhei',
			state: "Hawai'i",
			county: 'Maui',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'S',
			wind: 'NE',
			surf_height: "3' to 6'",
			tide: 'Medium'
		}
	},
	{
		name: 'Lahaina Harbor - Breakwall',
		id: 24,
		slug: 'lahaina-harbor-breakwall',
		noaa_station_id: 1615680,
		lat: 20.872,
		lon: -156.6803,
		facing: 'SW',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Lahaina',
			state: "Hawai'i",
			county: 'Maui',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'S',
			wind: 'NE',
			surf_height: "3' to 6'",
			tide: 'Medium'
		}
	},
	{
		name: 'Olowalu',
		id: 25,
		slug: 'olowalu',
		noaa_station_id: 1615680,
		lat: 20.809,
		lon: -156.623,
		facing: 'SW',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Lahaina',
			state: "Hawai'i",
			county: 'Maui',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'S',
			wind: 'NE',
			surf_height: "3' to 6'",
			tide: 'Medium'
		}
	},
	{
		name: 'Honokohau Bay',
		id: 26,
		slug: 'honokohau-bay',
		noaa_station_id: 1615680,
		lat: 21.0245,
		lon: -156.6097,
		facing: 'N',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Napili-Honokowai',
			state: "Hawai'i",
			county: 'Maui',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'N',
			wind: 'S',
			surf_height: "6' to 8'",
			tide: 'Medium'
		}
	},
	{
		name: 'Honolua Bay',
		id: 27,
		slug: 'honolua-bay',
		noaa_station_id: 1615680,
		lat: 21.016,
		lon: -156.6405,
		facing: 'E',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Napili-Honokowai',
			state: "Hawai'i",
			county: 'Maui',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'E',
			wind: 'W',
			surf_height: "6' to 12'",
			tide: 'Medium'
		}
	},
	{
		name: "Ho'okipa",
		id: 28,
		slug: 'ho-okipa',
		noaa_station_id: 1615680,
		lat: 20.9347,
		lon: -156.3584,
		facing: 'N',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Paia',
			state: "Hawai'i",
			county: 'Maui',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'N',
			wind: 'S',
			surf_height: "6' to 12'",
			tide: 'Medium'
		}
	},
	{
		name: 'Tavares Bay',
		id: 29,
		slug: 'tavares-bay',
		noaa_station_id: 1615680,
		lat: 20.9226,
		lon: -156.3748,
		facing: 'NW',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Paia',
			state: "Hawai'i",
			county: 'Maui',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'N',
			wind: 'S',
			surf_height: "3' to 6'",
			tide: 'Medium'
		}
	},
	{
		name: 'Big Beach - Little Beach',
		id: 30,
		slug: 'big-beach-little-beach',
		noaa_station_id: 1615680,
		lat: 20.6287,
		lon: -156.4481,
		facing: 'NE',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Wailea',
			state: "Hawai'i",
			county: 'Maui',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'SW',
			wind: 'NE',
			surf_height: "3' to 6'",
			tide: 'Medium to high'
		}
	},
	{
		name: 'Dumps',
		id: 31,
		slug: 'dumps',
		noaa_station_id: 1615680,
		lat: 20.6165,
		lon: -156.4383,
		facing: 'W',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Wailea',
			state: "Hawai'i",
			county: 'Maui',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'W',
			wind: 'E',
			surf_height: "6' to 12'",
			tide: 'Low to medium'
		}
	},
	{
		name: 'La Perouse Bay',
		id: 32,
		slug: 'la-perouse-bay',
		noaa_station_id: 1615680,
		lat: 20.5901,
		lon: -156.4158,
		facing: 'NE',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Wailea',
			state: "Hawai'i",
			county: 'Maui',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'NE',
			wind: 'SW',
			surf_height: "6' to 8'",
			tide: 'Medium'
		}
	},
	{
		name: 'Honomanu Bay',
		id: 33,
		slug: 'honomanu-bay',
		noaa_station_id: 1615680,
		lat: 20.8671,
		lon: -156.1653,
		facing: 'N',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Wailua',
			state: "Hawai'i",
			county: 'Maui',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'N',
			wind: 'S',
			surf_height: "6' to 8'",
			tide: 'Medium to high'
		}
	},
	{
		name: 'Kaiolohia Bay/Shipwreck Beach',
		id: 34,
		slug: 'kaiolohia-bay-shipwreck-beach',
		noaa_station_id: 1615680,
		lat: 20.9145,
		lon: -156.8959,
		facing: 'NE',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Lanai',
			state: "Hawai'i",
			county: 'Lāna‘i',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'NE',
			wind: 'S',
			surf_height: '4ft to 8ft',
			tide: 'Medium'
		}
	},
	{
		name: 'Lopa Beach',
		id: 35,
		slug: 'lopa-beach',
		noaa_station_id: 1615680,
		lat: 20.8002,
		lon: -156.8017,
		facing: 'SE',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Lanai',
			state: "Hawai'i",
			county: 'Lāna‘i',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'SE',
			wind: 'W',
			surf_height: '4ft to 8ft',
			tide: 'Medium'
		}
	},
	{
		name: 'Manele Bay',
		id: 36,
		slug: 'manele-bay',
		noaa_station_id: 1615680,
		lat: 20.7358,
		lon: -156.8942,
		facing: 'SW',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Lanai',
			state: "Hawai'i",
			county: 'Lāna‘i',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'S',
			wind: 'N to E',
			surf_height: '6ft to 10ft',
			tide: 'Medium'
		}
	},
	{
		name: 'Pohakuloa',
		id: 37,
		slug: 'pohakuloa',
		noaa_station_id: 1615680,
		lat: 20.9313,
		lon: -156.9915,
		facing: 'N',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Lanai',
			state: "Hawai'i",
			county: 'Lāna‘i',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'N',
			wind: 'S',
			surf_height: '6ft to 10ft',
			tide: 'Medium'
		}
	},
	{
		name: 'Halena Beach',
		id: 38,
		slug: 'halena-beach',
		noaa_station_id: 1615680,
		lat: 21.0848,
		lon: -157.2443,
		facing: 'S',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Kaunakakai',
			state: "Hawai'i",
			county: 'Moloka‘i',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'S',
			wind: 'N',
			surf_height: 'N/A',
			tide: 'N/A'
		}
	},
	{
		name: 'Kaunakakai (The Wharf)',
		id: 39,
		slug: 'kaunakakai-the-wharf',
		noaa_station_id: 1615680,
		lat: 21.0794,
		lon: -157.0299,
		facing: 'SW',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Kaunakakai',
			state: "Hawai'i",
			county: 'Moloka‘i',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'SW',
			wind: 'NE',
			surf_height: 'N/A',
			tide: 'N/A'
		}
	},
	{
		name: 'Kalaupapa',
		id: 40,
		slug: 'kalaupapa',
		noaa_station_id: 1615680,
		lat: 21.1903,
		lon: -156.9854,
		facing: 'W',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Kualapu‘u',
			state: "Hawai'i",
			county: 'Moloka‘i',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'W',
			wind: 'E',
			surf_height: 'N/A',
			tide: 'N/A'
		}
	},
	{
		name: 'Kawa',
		id: 41,
		slug: 'kawa',
		noaa_station_id: 1615680,
		lat: 21.2014,
		lon: -157.1526,
		facing: 'N',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Kualapu‘u',
			state: "Hawai'i",
			county: 'Moloka‘i',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'N',
			wind: 'S',
			surf_height: 'N/A',
			tide: 'N/A'
		}
	},
	{
		name: 'Kepuhi Bay',
		id: 42,
		slug: 'kepuhi-bay',
		noaa_station_id: 1615680,
		lat: 21.1894,
		lon: -157.2498,
		facing: 'W',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Kualapu‘u',
			state: "Hawai'i",
			county: 'Moloka‘i',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'W',
			wind: 'E',
			surf_height: 'N/A',
			tide: 'N/A'
		}
	},
	{
		name: 'Halawa Bay',
		id: 43,
		slug: 'halawa-bay',
		noaa_station_id: 1615680,
		lat: 21.1594,
		lon: -156.7347,
		facing: 'NE',
		timezone: 'Pacific/Honolulu',
		timezone_offset: -36000,
		location: {
			city: 'Waialua',
			state: "Hawai'i",
			county: 'Moloka‘i',
			country: 'United States'
		},
		ideal_conditions: {
			swell_direction: 'NE',
			wind: 'SW',
			surf_height: 'N/A',
			tide: 'N/A'
		}
	}
];

export default spots;
