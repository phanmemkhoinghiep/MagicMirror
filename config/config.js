/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */
/*jshint esversion: 6*/
var config = {
	address: "", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 1719, //Depend your config
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "vi",
	timeFormat: 12,
	units: "metric",

	modules: [
	
		{
			module: "clock",				
			position: "top_left",
            "pages": {"Trang chủ": "top_left", "Tin tức": "top_left","Thời tiết": "top_left","Life": "top_left","Giải trí": "top_left","Công việc": "top_left","smarthome": "top_left","Hệ thống": "top_left"},		
			config: {
				clockBold:true,
		    }
		},	
			{
			module: "alert",
			config: {
			// The config property is optional.
			// See 'Configuration options' for more information.
				effect:"scale",
				effect_alert:"scale",
				position:"center",
				display_time:6000,
			}
		},
			
		//Page 1 "Main
		{
			module: "compliments",
			position: "lower_third",
			"pages": {"Trang chủ": "lower_third"},	
		},
/* 		{
			module: 'MMM-IFTTT',
			position: 'lower_third',
            "pages": {"Trang chủ": "lower_third"},		
			config: {}
		},   */	
		

		//Page 2 "News"
		

		{
	module: "MMM-NewsFeedTicker",
	disabled: false,    
    position: "top_left",
	//classes: "day_scheduler",
	"pages": {"Tin tức": "bottom_left"},
	config: {
	    feeds: [
		{
			title: "Dân Trí",
			url: "https://dantri.com.vn/trangchu.rss",
			customLogo: "dantri_logo.png"
		},
		{
			title: "VnExpress",
			url: "https://vnexpress.net/rss/tin-moi-nhat.rss",
			customLogo: "vnexpress_logo.png"
		},
		{
			title: "Báo Moi",
			url: "https://baomoi.com/tag/rss.epi",
			customLogo: "baomoi_logo.gif"
		},
		{
			title: "Tinh Te",
			url: "www.tinhte.vn/rss",
			customLogo: "tinhte_logo.gif"
		},
		{
			title: "Ngôi Sao.Net",
			url: "https://ngoisao.net/rss/chuyen-la.rss",
			customLogo: "ngoisao_logo.gif"
		}
    	    ]
	}
    },	
		//Page 3: "Weather"
		{
			module: "currentweather",
			position: "top_center",
			"pages": {"Thời tiết": "top_left"},
			config: {
				location: "Ha Dong",
				locationID: "1581364",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "my_api"
			}
		},
		{
			module: "weatherforecast",
			position: "top_center",
			"pages": {"Thời tiết": "top_left"},
			header: "Thời tiết (Weather Forecast)",
			config: {
				location: "Ha Dong",
				locationID: "1581364",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "my_api"
			}
		},
		{
			module: "MMM-DarkSkyForecast",
			disabled: false,			
            header: "Thời tiết (DarkSky)",
            position: "top_right",
			"pages": {"Thời tiết": "middle_left"},
          classes: "default everyone",          
          config: {	  
          apikey: "my_api",
          latitude: "20.969028",
          longitude: "105.783389",      
          iconset: "2c",
          concise: false,
          forecastLayout: "table"
                 }
        },    
//Page 4 Life
        {
			module: "calendar",
			header: "NGHỈ LỄ VIỆT NAM",
		    "pages": {"Life": "top_left"},
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/77/Vietnam_Holidays.ics"
					}
				]
			}
		},
  


//Page 5 Entertaiment


//Page 6: Work
      {
			module: 'MMM-Year-Progress',
			position: 'bottom_left',
			"pages": {"Công việc": "top_left"},
			header: 'Ngày trong năm',
			config: {
				updateInterval: 60 * 60 * 1000,
				debug: false
			}
		},	

//Page 7: Smarthome				



//Page 8: System Page 
            {
				module: 'MMM-SystemStats',
				position: 'top_center', // This can be any of the regions.
				"pages": {"Hệ thống": "top_left"},	
				classes: 'dimmed', // Add your own styling. OPTIONAL.
				// header: 'System Stats', // Set the header text OPTIONAL
				config: {
					updateInterval: 10000, // every 10 seconds
					align: 'left', // align labels
					//header: 'System Stats', // This is optional
					units: 'metric', // default, metric, imperial
					view: 'textAndIcon',
					useSyslog: false,
					thresholdCPUTemp:70,
					baseURLSyslog: "http://127.0.0.1:1719/sys",
				}
			},
/* 			{
				module: 'MMM-NetworkConnection',
				position: 'top_right',
				"pages": {"Hệ thống": "bottom_left"},	
				config: {
			    updateInterval:600000,
				}
			}, */

/* 			{
			  module: 'MMM-Tools',
			  position: 'bottom_right',
			  "pages": {"Hệ thống": "bottom_right"},	
			  config: {
				device : "RPI", // "RPI" is also available
				refresh_interval_ms : 10000,
				warning_interval_ms : 10000 * 60 * 5,
				enable_warning : true,
				warning : {
				  CPU_TEMPERATURE : 67,
				  GPU_TEMPERATURE : 67,
				  CPU_USAGE : 75,
				  STORAGE_USED_PERCENT : 80,
				  MEMORY_USED_PERCENT : 80
				},
				warning_text: {
				  CPU_TEMPERATURE : "Nhiệt độ của CPU vượt quá %VAL%",
				  GPU_TEMPERATURE : "Nhiệt độ của GPU vượt quá %VAL%",
				  CPU_USAGE : "% CPU sử dụng vượt quá %VAL%",
				  STORAGE_USED_PERCENT : "Thẻ nhớ sử dụng vượt quá %VAL% percent",
				  MEMORY_USED_PERCENT : "Thẻ nhớ sử dụng vượt quá %VAL% percent",
				}
			  }
			}, */
		{
			module: 'MMM-syslog',
			position: 'top_right',
			"pages": {"Hệ thống": "top_left"},		
			config: {
			max:5,
			alert: true,
			}
		},
/*		{
			module: "MMM-EARTH",
			position: "bottom_center",
			"pages": {"Hệ thống": "bottom_left"},		
			config: {
				animationSpeed:100,
				mode: "Natural",
				rotateInterval: 15000,
				MaxWidth: "50%",
				MaxHeight: "50%",
			}
		},*/
		{
			module: "MMM-Remote-Control",
		//	"pages": {"Hệ thống": "bottom_left"},		
			// uncomment the following line to show the URL of the remote control on the mirror
			// , position: 'bottom_left'
			// you can hide this module afterwards from the remote control itself
			config: {
				customCommand: {},  // Optional, See "Using Custom Commands" below
				customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
				showModuleApiMenu: true, // Optional, Enable the Module Controls menu
			//	apiKey: "",         // Optional, See API/README.md for details
			}
		},
//Tool Page
/*
			 {
			  module: "MMM-Clap",
			  position: "top_right",
			  "pages": {"Trang chủ": "top_right", "Tin tức": "top_right","Thời tiết": "top_right","Life": "top_right","Giải trí": "top_right","Công việc": "top_right","smarthome": "top_right","Hệ thống": "top_right"},	
			  config: {
				detector: {
				  recordDevice: "plughw:1,0",
				},
				defaultCommandMode: "MODE_DEFAULT",
				commands: {
				  "MODE_DEFAULT": {
				    "1": {
					  notificationExec: {
						notification: "PAGE_SELECT",
						payload:0
					  },
					  restart:false,						
					  }, 
					
				  },
				}
			  },*/		
				{
			  module: "MMM-NotificationTrigger",			  
			  config: {
				useWebhook: true,  
				triggers:[
				  {
					trigger: "TRANG_CHU",
					fires: [
					  {
						fire: "PAGE_SELECT",
						payload: (pl) => {return 0}
					  },
					  {
						fire: "HOTWORD_PAUSE",					
					  },
					  {
						fire: "TTS_SAY",
						payload: (pl) => {return "Đã chuyển đến trang chủ"}
					  },
					  {
						fire: "HOTWORD_RESUME",					
					  },					  
					]
				  },
				    {
					trigger: "TIN_TUC",
					fires: [
					  {
						fire: "PAGE_SELECT",
						payload: (pl) => {return 1}
					  },
					  {
						fire: "HOTWORD_PAUSE",					
					  },
					  {
						fire: "TTS_SAY",
						payload: (pl) => {return "Đã chuyển đến mục tin tức"}
					  },
					  {
						fire: "HOTWORD_RESUME",					
					  },					  
					]
				  },
				  {
					trigger: "THOI_TIET",
					fires: [
					  {
						fire: "PAGE_SELECT",
						payload: (pl) => {return 2}
					  },
					  {
						fire: "HOTWORD_PAUSE",					
					  },
					  {
						fire: "TTS_SAY",
						payload: (pl) => {return "Đã chuyển đến mục thời tiết"}
					  },
					  {
						fire: "HOTWORD_RESUME",					
					  },					  					  
					]
				  },
				  {
					trigger: "CUOC_SONG",
					fires: [
					  {
						fire: "PAGE_SELECT",
						payload: (pl) => {return 3}
					  },
					  {
						fire: "HOTWORD_PAUSE",					
					  },
					  {
						fire: "TTS_SAY",
						payload: (pl) => {return "Đã chuyển đến mục cuộc sống"}
					  },
					  {
						fire: "HOTWORD_RESUME",					
					  },					  					  
					]
				  },				
				  {
					trigger: "GIAI_TRI",
					fires: [
					  {
						fire: "PAGE_SELECT",
						payload: (pl) => {return 4}
					  },
					  {
						fire: "HOTWORD_PAUSE",					
					  },
					  {
						fire: "TTS_SAY",
						payload: (pl) => {return "Đã chuyển đến mục giải trí"}
					  },
					  {
						fire: "HOTWORD_RESUME",					
					  },					  
					]
				  },
				    {
					trigger: "CONG_VIEC",
					fires: [
					  {
						fire: "PAGE_SELECT",
						payload: (pl) => {return 5}
					  },
					  {
						fire: "HOTWORD_PAUSE",					
					  },
					  {
						fire: "TTS_SAY",
						payload: (pl) => {return "Đã chuyển đến mục công việc"}
					  },
					  {
						fire: "HOTWORD_RESUME",					
					  },					  
					]
				  },
				  {
					trigger: "SMART_HOME",
					fires: [
					  {
						fire: "PAGE_SELECT",
						payload: (pl) => {return 6}
					  },
					  {
						fire: "HOTWORD_PAUSE",					
					  },
					  {
						fire: "TTS_SAY",
						payload: (pl) => {return "Đã chuyển đến mục smarthome"}
					  },
					 {
						fire: "HOTWORD_RESUME",					
					  },
					]
				  },
				  {
					trigger: "HE_THONG",
					fires: [
					  {
						fire: "PAGE_SELECT",
						payload: (pl) => {return 7}
					  },
					  {
						fire: "HOTWORD_PAUSE",					
					  },
					  {
						fire: "TTS_SAY",
						payload: (pl) => {return "Đã chuyển đến mục hệ thống"}
					  },
					  {
						fire: "HOTWORD_RESUME",					
					  },					  
					]
				  },
				  {
				trigger: "IFTTT_COMMAND",
				fires: [
				  {
					fire: "HOTWORD_PAUSE",					
				  },
		/*		  {
					fire:"TTS_SAY",
					payload: (pl) => 
					{return pl.message }				     				
			       },*/				   	
				   {		  	   
					fire:"SHOW_ALERT",
				    payload: function(pl) {
					 return {
					type:"notification",
					title:pl.title,
					message: pl.message,
					timer:pl.timer
                      }
                    }
				   },
				   {
					fire: "HOTWORD_RESUME",					
				   },				   
				]
			  },
			  ]
			 }
			},
		{
		  module: "MMM-GoogleTTS", // no `position` is needed.
		  config: {
			  welcome: null,
			  dailyCharLimit: 129000,
			  sourceType: "text",
			  voiceName: "vi-VN-Wavenet-A",
			  languageCode: "vi-VN",
			  ssmlGender: "FEMALE",
		  }
		},
	
        {	"module": "MMM-Page-Selector",
			position: "top_center",
			config: {
				"defaultPage": "main",
				"displayTitle": true,
				selectPageNotif: ["PAGE_SELECT"],
                incrementPageNotif: ["PAGE_UP"],
                decrementPageNotif: ["PAGE_DOWN"],
	            persistentPages: true,
				autoChange: {
				interval: 10000
	            },	            
			}
		},
		{
			module: "MMM-page-indicator",
			position: "bottom_bar",
			"pages": {"Trang chủ": "bottom_bar", "Tin tức": "bottom_bar","Thời tiết": "bottom_bar","Life": "bottom_bar","Giải trí": "bottom_bar","Công việc": "bottom_bar","smarthome": "bottom_bar","Hệ thống": "bottom_bar"},	
          	config: {
			pages: 8,
			}
		},
	//Assistant Page 
    		  //Assistant

   {
	module: "MMM-Hotword",
	position: "top_right",
	"pages": {"Trang chủ": "top_right", "Tin tức": "top_right","Thời tiết": "top_right","Life": "top_right","Giải trí": "top_right","Công việc": "top_right","smarthome": "top_right","Hệ thống": "top_right"},	
    config: {
      useDisplay: false,
      chimeOnFinish: null,
      recipes: ["with-AMk2v3_smart-mirror.js"],
		mic: {
			recordProgram: "arecord",
			device: "plughw:1,0"	
		},
		models: [			
/* 			{
				hotwords    : "computer",
				file        : "computer.umdl",
				sensitivity : "0.4",
			}, */
			{
				hotwords    : "stop",
				file        : "stop.pmdl",
				sensitivity : "0.4",
			},
			{
				hotwords    : "trang_chủ",
				file        : "trang_chủ.pmdl",
				sensitivity : "0.4",
			},
			{
				hotwords    : "tin_tức",
				file        : "tin_tức.pmdl",
				sensitivity : "0.4",
			}, 			
			{
				hotwords    : "thời_tiết",
				file        : "thời_tiết.pmdl",
				sensitivity : "0.4",
			}, 		
		    {
				hotwords    : "cuộc_sống",
				file        : "cuộc_sống.pmdl",
				sensitivity : "0.4",
			},			
			{
				hotwords    : "giải_trí",
				file        : "giải_trí.pmdl",
				sensitivity : "0.4",
			},
			{
				hotwords    : "công_việc",
				file        : "công_việc.pmdl",
				sensitivity : "0.4",
			},
			{
				hotwords    : "smarthome",
				file        : "smarthome.pmdl",
				sensitivity : "0.4",
			},
			{
				hotwords    : "hệ_thống",
				file        : "hệ_thống.pmdl",
				sensitivity : "0.4",
			},
			
		],		
		commands: {
	
/* 			"computer": {
				notificationExec: {
					notification: "ASSISTANT_ACTIVATE",
					payload: (detected, afterRecord) => {
						return {profile:"default"}
					}
				},
				restart:false,
				afterRecordLimit:0
			},	 */
			"trang_chủ": {
				notificationExec: {			
					notification: "TRANG_CHU",					
					},
				restart:false,			
				},		
			"tin_tức": {
				notificationExec: {			
					notification: "TIN_TUC",	
				},
				restart:false,
            },	
			"thời_tiết": {
				notificationExec: {			
					notification: "THOI_TIET",
					},
				restart:false,			
				},
			"cuộc_sống": {
				notificationExec: {			
					notification: "CUOC_SONG",
					},
				restart:false,			
				},	
           "giải_trí": {
				notificationExec: {			
					notification: "GIAI_TRI",			
					},
				restart:false,			
				},
			"công_việc": {
				notificationExec: {			
					notification: "CONG_VIEC",			
					},
				restart:false,			
				},	
			"smarthome": {
				notificationExec: {			
					notification: "SMART_HOME",			
					},
				restart:false,			
				},
			"hệ_thống": {
				notificationExec: {			
					notification: "HE_THONG",				
					},
				restart:false,			
				},				
			}	
		}
	},

			{
			module: "MMM-AssistantMk2",
			position: "top_right",
		"pages": {"Trang chủ": "top_right", "Tin tức": "top_right","Thời tiết": "top_right","Life": "top_right","Giải trí": "top_right","Công việc": "top_right","smarthome": "top_right","Hệ thống": "top_right"},	

  config: {
    debug: false,
    ui: "Fullscreen", // Classic2 or Classic
    // if you want Google Home ui style
    // set Fullscreen ui AND fullscreen_above position
    assistantConfig: {
      projectId: "", // Required to use gaction.
      modelId: "", // (OPTIONAL for gaction)
      instanceId: "", // (OPTIONAL for gaction)
      latitude: 20.969028, // -90.0 - +90.0
      longitude: 105.783389, // -180.0 - +180.0
    },
    responseConfig: {
      useHTML5: true, // sound render by HTML5
      useScreenOutput: true,
      useAudioOutput: true,
      useChime: true,
      timer: 5000,
      myMagicWord: false,
      //Your prefer sound play program.
      //By example, if you are running this on OSX, `afplay` could be available.
      //by default mpg321 play program is enabled
      //if audio output cutting try with mpg123 or cvlc program
      playProgram: "mpg321",
      chime: {
        beep: "beep.mp3",
        error: "error.mp3",
        continue: "continue.mp3",
        open: "Google_beep_open.mp3",
        close: "Google_beep_close.mp3",
      },
      // false - animated icons, 'standby' - static icons only for standby state, true - all static icons
      useStaticIcons: false
    },
    micConfig: { // put there configuration generated by auto-installer
      recorder: "arecord",
      device: "plughw:1,0",
    },
    customActionConfig: {
      autoMakeAction: false,
      autoUpdateAction: false, // in RPI, gaction CLI might have some trouble.(current version should be 2.2.4, but for linux-arm, Google haven't updated) so leave this as false in RPI. I don't know it is solved or not.
      actionLocale: "en-US", // At this moment, multi-languages are not supported, sorry. Someday I'll work.
    },
    recipes: [ "with-MMM-Hotword.js", "with-MMM-TelegramBot.js" ],
    profiles: {
      "default": {
        profileFile: "default.json",
        lang: "vi"
      }
    },
    useA2D: false,
  },
},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
