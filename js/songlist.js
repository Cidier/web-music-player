// xhrFields: { withCredentials: true }
// const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
// import axios from 'axios'
// Vue.prototype.$http = axios;
var app = new Vue({
    el: "#app",
    data: {
        query: "",
        musiclist: [],
        musicUrl: "",//歌曲地址
        singerslist: [],
        hotSongs: "",
        musictable: [],
        isFirst: true,
        isSecond: false,
        isThird: false,
        homepage: true,
        singer: false, //展示歌手界面
        sort: false,
        liu: false,
           showOMS: false,
        showChinaS: false,
        showJanS: false,
        showKS: false,
        showHot:false,
        showQT:false,
        showSingerSong1:false,
        showSingerSong2:false,
        showSingerSong3:false,
        showSingerSong4:false,
        showSingerSong5:false,
        showSingerSong6:false,
        
        allsingerMessage:[],  //所有歌手信息
        singers:[],//歌手
        OMSingers:[],//欧美歌手  OMSingers
        ChinaSingers:[],
        JanSingers:[],
        KoreanSingers:[],
        HotSingers:[],
        QTSingers:[],
        singerID:"",
        musicID:"",//歌曲id
        musicPicSize:"",    //歌手照片大小
        singerSongs:[],  // 歌手的歌曲
        singerID:"",  //歌手ID
        isPlaying:false,
        showZZ:false,  //遮罩层的显示状态,
        lyrics:"",
        links:[],//排行榜
        phbID:"",//排行榜榜单的ID
        phbSongs:[],  
        showPHB:false,
        showphb:false,  //展示排行榜界面
        comments:"",
        hotComments:[],
        lyricsUrl: "",
        isShow: false,   //遮罩层的显示状态
        mvUrl: "",
        searchMv:false
  
        

    },
    methods: {
        gethomepage: function() { //获得轮播图界面
            this.homepage = true;
            this.singer = false;
            this.sort = false;
            this.liu = false;
            this.showphb=false;
            this.showOMS=false,
            this.showChinaS= false,
            this.showJanS=false,
            this.showKS= false,
            this.showHot=false,
            this.showQT=false,
            this.showSingerSong1=false,
            this.showSingerSong2=false,
            this.showSingerSong3=false,
            this.showSingerSong4=false,
            this.showSingerSong5=false,
            this.showSingerSong6=false,
            this.showPHB=false
        

        },
        getsinger: function() { //获得歌手界面
            this.homepage = false;
            this.singer = true;
            this.sort = false;
            this.liu = false;
            this.showphb=false;
            this.showOMS=false,
            this.showChinaS= false,
            this.showJanS=false,
            this.showKS= false,
            this.showHot=false,
            this.showQT=false,
            this.showSingerSong1=false,
            this.showSingerSong2=false,
            this.showSingerSong3=false,
            this.showSingerSong4=false,
            this.showSingerSong5=false,
            this.showSingerSong6=false,
            this.showPHB=false

        },
        getPHB:function(){//获得排行榜界面
            this.homepage = false;
            this.singer = false;
            this.sort = false;
            this.liu = false;
            this.showOMS=false,
            this.showChinaS= false,
            this.showJanS=false,
            this.showKS= false,
            this.showHot=false,
            this.showQT=false,
            this.showSingerSong1=false,
            this.showSingerSong2=false,
            this.showSingerSong3=false,
            this.showSingerSong4=false,
            this.showSingerSong5=false,
            this.showSingerSong6=false,
            this.showPHB=false;
            this.showphb=true;


        },
        getsort: function() { //获得歌单
            this.homepage = false;
            this.singer = false;
            this.sort = true;
            this.liu = false;
            this.showphb=false;
            this.showOMS=false,
            this.showChinaS= false,
            this.showJanS=false,
            this.showKS= false,
            this.showHot=false,
            this.showQT=false,
            this.showSingerSong1=false,
            this.showSingerSong2=false,
            this.showSingerSong3=false,
            this.showSingerSong4=false,
            this.showSingerSong5=false,
            this.showSingerSong6=false,
            this.showPHB=false

        },
        getliu: function() { //获得搜索界面
            this.homepage = false;
            this.singer = false;
            this.sort = false;
            this.liu = true;
            this.showphb=false;
            this.showOMS=false,
            this.showChinaS= false,
            this.showJanS=false,
            this.showKS= false,
            this.showHot=false,
            this.showQT=false,
            this.showSingerSong1=false,
            this.showSingerSong2=false,
            this.showSingerSong3=false,
            this.showSingerSong4=false,
            this.showSingerSong5=false,
            this.showSingerSong6=false,
            this.showPHB=false
        },
        //搜索音乐
        searchMusicList: function() {
            var that = this;
            // axios.get(API_PROXY + "https://music.163.com/api/playlist/detail?id=19723756")
            axios.get("https://autumnfish.cn/search?limit=20&&keywords=" + this.query)
                .then(function(reponse) {
                    // console.log(reponse);
                    that.musiclist = reponse.data.result.songs;
                    // console.log(reponse.data.result.songs);
                }, function(err) {})
        },


        // //返回搜索后的音乐列表
        // playMusic: function(musicId) {
        //     // console.log(musicId);
        //     var that = this;
        //     axios.get("https://autumnfish.cn/song/url?id=" + musicId)
        //         .then(function(response) {
        //             that.musicUrl = response.data.data[0].url;
        //         }, function(err) {})
        // },


        //华语精选歌单
        newMusic: function() {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=5001")
                // axios.get("https://autumnfish.cn/playlist/highquality/tags")
                .then(function(response) {
                    console.log(response)
                    that.musictable = undefined;
                    that.musictable = new Array();
                    that.musictable = response.data.playlist.tracks;
                    // console.log(response.data.playlists)
                }, function(err) {})
        },

        //播放歌单音乐
        listNewMusic: function(id) {
            // console.log(id)
            var that = this;
            axios.get("https://autumnfish.cn/song/url?id=" + id)
                .then(function(response) {
                    console.log(response)
                        // that.musictable = undefined;
                        // that.musictable = new Array();
                        that.musicUrl = response.data.data[0].url;
                })
        },


        //R&S/Soul精选歌单
        RSSoul: function() {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=5005")
                .then(function(response) {
                    // console.log(response)
                    that.musictable = undefined;
                    that.musictable = new Array();
                    that.musictable = response.data.playlist.tracks;
                    // console.log(response.data.playlists)
                }, function(err) {})
        },

        //流行精选歌单
        remember: function() {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=1")
                .then(function(response) {
                    // console.log(response)
                    that.musictable = undefined;
                    that.musictable = new Array();
                    that.musictable = response.data.playlist.tracks;
                    // console.log(response.data.playlists)
                }, function(err) {})
        },

        //青春你好音乐
        westernmusic: function() {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=4001")
                .then(function(response) {
                    // console.log(response)
                    that.musictable = undefined;
                    that.musictable = new Array();
                    that.musictable = response.data.playlist.tracks;
                    // console.log(response.data.playlists)
                }, function(err) {})
        },

        //夜晚精选
        goodnight: function() {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=1015")
                .then(function(response) {
                    // console.log(response)
                    that.musictable = undefined;
                    that.musictable = new Array();
                    that.musictable = response.data.playlist.tracks;
                    // console.log(response.data.playlists)
                }, function(err) {})
        },


        //成长之路精选
        studyload: function() {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=2017")
                .then(function(response) {
                    // console.log(response)
                    that.musictable = undefined;
                    that.musictable = new Array();
                    that.musictable = response.data.playlist.tracks;
                    // console.log(response.data.playlists)
                }, function(err) {})
        },
        //获取歌手榜单
        // listMusic: function() {                                  
        //   var that = this;
        //   axios.get("https://autumnfish.cn/toplist/artist")
        //   .then(function(response){
        //       that.musiclist = undefined;
        //       that.musiclist = new Array();
        //       that.musiclist = response.data.list.artists;
        //       // console.log(response)
        //   },function(err){})
        // },

        //获取歌手歌单
        // getSingersList: function(id) {
        //   console.log(id);
        //   var that = this;
        //   axios.get("https://autumnfish.cn/artists?id=" + id)
        //   .then(function(response){
        //     // console.log(response)
        //     that.musiclist = undefined;
        //     that.musiclist = new Array();
        //     that.musiclist = response.data.hotsongs;
        //   },function(err){})
        // }


        //民谣精选歌单
        folkmusic: function() {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=1001")
                .then(function(response) {
                    // console.log(response)
                    that.musictable = undefined;
                    that.musictable = new Array();
                    that.musictable = response.data.playlist.tracks;
                    // console.log(response.data.playlists)
                }, function(err) {})
        },

        //英伦精选歌单
        Englishstyle: function() {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=1005")
                .then(function(response) {
                    // console.log(response)
                    that.musictable = undefined;
                    that.musictable = new Array();
                    that.musictable = response.data.playlist.tracks;
                    // console.log(response.data.playlists)
                }, function(err) {})
        },

        //90回忆歌单
        ninetymemory: function() {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=5009")
                .then(function(response) {
                    // console.log(response)
                    that.musictable = undefined;
                    that.musictable = new Array();
                    that.musictable = response.data.playlist.tracks;
                    // console.log(response.data.playlists)
                }, function(err) {})
        },

        //乡村精选歌单
        romanticmusic: function() {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=1010")
                .then(function(response) {
                    // console.log(response)
                    that.musictable = undefined;
                    that.musictable = new Array();
                    that.musictable = response.data.playlist.tracks;
                    // console.log(response.data.playlists)
                }, function(err) {})
        },

        //世界音乐歌单
        worldmusic: function() {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=2004")
                .then(function(response) {
                    // console.log(response)
                    that.musictable = undefined;
                    that.musictable = new Array();
                    that.musictable = response.data.playlist.tracks;
                    // console.log(response.data.playlists)
                }, function(err) {})
        },

        //私人订制歌单
        MusicalInstruments: function() {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=2008")
                .then(function(response) {
                    // console.log(response)
                    that.musictable = undefined;
                    that.musictable = new Array();
                    that.musictable = response.data.playlist.tracks;
                    // console.log(response.data.playlists)
                }, function(err) {})
        },

        //换页功能
        //换到第一页
        changefirstpage: function() {
            this.isFirst = true;
            this.isSecond = false;
            this.isThird = false;
        },

        //换到第二页
        changesecondpage: function() {
            this.isFirst = false;
            this.isSecond = true;
            this.isThird = false;
        },

        //换到第三页
        changethirdpage: function() {
            this.isFirst = false;
            this.isSecond = false;
            this.isThird = true
        },
             //测试歌单
             Musictest: function() {
                var that = this;
                axios.get("https://autumnfish.cn/playlist/detail?id=24381616")
                .then(function(response) {
                    //console.log(response)
                    that.musictable = undefined;
                    that.musictable = new Array();
                    that.musictable = response.data.playlist.tracks;
                })
            },
    
    
            //草原之夜
            prairiesmusic: function() {
                var that = this;
                axios.get("https://autumnfish.cn/playlist/detail?id=24381617")
                .then(function(response) {
                    //console.log(response)
                    that.musictable = undefined;
                    that.musictable = new Array();
                    that.musictable = response.data.playlist.tracks;
                })
            },
    
            //追星之路
            idolMusic: function() {
                var that = this;
                axios.get("https://autumnfish.cn/playlist/detail?id=24381618")
                .then(function(response) {
                    that.musictable = undefined;
                    that.musictable = new Array();
                    that.musictable = response.data.playlist.tracks;
                })
            },
    
            //经典影视
            filmMusic: function() {
                var that = this;
                axios.get("https://autumnfish.cn/playlist/detail?id=24381615")
                .then(function(response) {
                    that.musictable = undefined;
                    that.musictable = new Array();
                    that.musictable = response.data.playlist.tracks;
                })
            },
    
            // 放松一下
            relaxMusic: function() {
                var that = this;
                axios.get("https://autumnfish.cn/playlist/detail?id=24381606")
                .then(function(response) {
                    that.musictable = undefined;
                    that.musictable = new Array();
                    that.musictable = response.data.playlist.tracks;
                })
            },
    
            //分手快乐
            breakupMusic: function() {
                var that = this;
                axios.get("https://autumnfish.cn/playlist/detail?id=24381631")
                .then(function(response) {
                    that.musictable = undefined;
                    that.musictable = new Array();
                    that.musictable = response.data.playlist.tracks;
                })
            },
             //播放搜索MV
        playMv: function(mvid) {
            var that = this;
            axios.get("https://autumnfish.cn/mv/url?id=" + mvid)
            .then(function(response) {
                that.searchMv=true;
                that.mvUrl = response.data.data.url;
                if(that.mvUrl==null){
                    alert("没有MV");
                }
            })
        },
                 //播放歌手排行榜歌曲的MV
        playMV: function(mvid) {
            var that = this;
            axios.get("https://autumnfish.cn/mv/url?id=" + mvid)
            .then(function(response) {
                that.isShow = true;
                that.mvUrl = response.data.data.url;
                if(that.mvUrl==null){
                    alert("没有MV");
                }
            })
        },


        //换到上一页
        lastpage: function() {
            if(this.isSecond == true){
                this.isSecond = false;
                this.isFirst = true;
            }else if(this.isThird == true){
                this.isThird = false;
                this.isSecond = true;
            }else{

            }
        },

        nextpage: function() {
            if(this.isFirst == true){
                this.isFirst = false;
                this.isSecond = true;
            }else if(this.isSecond == true){
                this.isSecond = false;
                this.isThird = true;
            }else{

            }
        },
        getOMSingers : function(){//获取欧美女歌手信息
            var that=this;
            axios.get(" https://autumnfish.cn/artist/list?type=-1&area=96 ")
            .then(function(res){
                //console.log(res);
                that.OMSingers=res.data.artists;
            })
       },

       getChinaSingers:function(){

           var that=this;
            axios.get(" https://autumnfish.cn/list?type=-1&area=7 ")
            .then(function(res){
                //console.log(res);
                that.ChinaSingers=res.data.artists;
            })
       },
       getJanSingers :function(){

           var that=this;
            axios.get(" https://autumnfish.cn/artist/list?type=-1&area=8")
            .then(function(res){
                //console.log(res);
                that.JanSingers=res.data.artists;
            })
       },
       getKoreanSingers:function(){

           var that=this;
            axios.get("https://autumnfish.cn/artist/list?type=-1&area=16 ")
            .then(function(res){
                //console.log(res);
                that.KoreanSingers=res.data.artists;
            })
       },

       
       getQTSingers:function()  {
           var that=this;
           axios.get("https://autumnfish.cn/artist/list?type=-1&area=0")
           .then(function(res){
               console.log(res);
               that.QTSingers=res.data.artists;
           })
         },
       getHotSinger:function()  {
           var that=this;
           axios.get("https://autumnfish.cn/top/artists?offset=0&limit=30")
           .then(res=>{
               console.log(res);
               that.HotSingers=res.data.artists;
           })
         },

       getSingleSinger:function(singerID){  //得到每个歌手的歌曲

           var that=this;
           axios.get("https://autumnfish.cn/artist/songs?id="+singerID)
           .then(function(res){
            //   console.log(res);
               that.singerSongs=res.data.songs;
                console.log(that.singerSongs);
           //songs[i].al.name geming 

//songs[i].al.id

           });
        },
       // getLyrics:function(musicID){
       //    var that=this;
       //     axios.get('http://test.codeedu.com.cn/wangyiyun/lyric?id='+musicID)
       //    .then(function(res){
       //         that.lyrics=res.data.lrc.lyric;
       //         document.getElementById("lyr").value=that.lyric;
          
       //     })
       // },

       isShowZZ:function(){
           this.showZZ=true
       },
       hide:function(){
           this.showZZ=false,
           this.isShow=false

       },  //遮罩层隐藏


           isShow1:function(){   //展示欧美歌手界面辣
           this.showOMS=true,
           this.showChinaS=false,
           this.showJanS=false,
           this.showKS=false,
           this.singer=false,
           this.showQT=false
 
       },
       isShow2:function(){   //展示国语歌手界面辣
           this.showOMS=false,
           this.showChinaS=true,
           this.showJanS=false,
           this.showKS=false,
           this.singer=false,
           this.showQT=false
       },
       isShow3:function(){   //展示日本歌手界面辣
           this.showOMS=false,
           this.showChinaS=false,
           this.showJanS=true,
           this.showKS=false,
           this.singer=false,
           this.showQT=false
       },
       isShow4:function(){   //展示韩国歌手界面辣
           this.showOMS=false,
           this.showChinaS=false,
           this.showJanS=false,
           this.showKS=true,
           this.singer=false,
           this.showQT=false
       },
       isShow5:function(){   //展示韩国歌手界面辣
           this.showOMS=false,
           this.showChinaS=false,
           this.showJanS=false,
           this.showKS=false,
           this.singer=false,
           this.showHot=true,
           this.showQT=false
       },
       isShow6:function(){
           this.showOMS=false,
           this.showChinaS=false,
           this.showJanS=false,
           this.showKS=false,
           this.singer=false,
           this.showHot=false,
           this.showQT=true
           
       },
       //以下为每个歌手歌曲信息
       isShow11 :function(){
       this.showSingerSong1=true,
       this.showSingerSong2=false,
       this.showSingerSong3=false,
       this.showSingerSong4=false,
       this.showSingerSong5=false,
       this.showSingerSong6=false,
       this.showOMS=false  ,
       this.showQT=false
       },

       isShow21 :function(){
           this.showSingerSong1=false,
           this.showSingerSong2=true,
           this.showSingerSong3=false,
           this.showSingerSong4=false,
           this.showSingerSong5=false,
       this.showSingerSong6=false,
           this.showChinaS=false,
           this.showQT=false
          
       },

       isShow31 :function(){
           this.showSingerSong1=false,
           this.showSingerSong2=false,
           this.showSingerSong3=true,
           this.showSingerSong4=false,
           this.showSingerSong5=false,
           this.showSingerSong6=false,
           this.showJanS=false,
           this.showQT=false
           
       },

       isShow41 :function(){
           this.showSingerSong1=false,
           this.showSingerSong2=false,
           this.showSingerSong3=false,
           this.showSingerSong4=true,
           
           this.showSingerSong5=false,
           this.showSingerSong6=false,
           this.showKS=false,
           this.showQT=false
       
       },
       isShow51:function(){
           this.showSingerSong1=false,
           this.showSingerSong2=false,
           this.showSingerSong3=false,
           this.showSingerSong4=false,
           this.showSingerSong5=true,
           this.showSingerSong6=false,
           this.showJanS=false,
           this.showHot=false,
           this.showQT=false
          },
       isShow61:function(){
           this.showSingerSong1=false,
           this.showSingerSong2=false,
           this.showSingerSong3=false,
           this.showSingerSong4=false,
           this.showSingerSong5=false,
           this.showSingerSong6=true,
           this.showJanS=false,
           this.showHot=false,
           this.showQT=false
          },
       
       return1:function(){  //返回到有欧美中日韩四个歌手单的页面
           this.singer=true,
           this.showOMS=false,
           this.showChinaS= false,
           this.showJanS=false,
           this.showKS= false,
           this.showHot=false,
           this.showQT=false,
           this.showSingerSong1=false,
           this.showSingerSong2=false,
           this.showSingerSong3=false,
           this.showSingerSong4=false,
           this.showSingerSong5=false,
           this.showSingerSong6=false
           
       },

       return2OM :function(){   //返回到欧美歌手界面
           this.singer=false,
           this.showOMS=true,
           this.showChinaS= false,
           this.showJanS=false,
           this.showKS= false,
           this.showSingerSong1=false,
           this.showSingerSong2=false,
           this.showHot=false,
           this.showSingerSong3=false,
           this.showSingerSong4=false,
           this.showQT=false


       },

       
       return2China :function(){
           this.singer=false,
           this.showOMS=false,
           this.showChinaS= true,
           this.showJanS=false,
           this.showKS= false,
           this.showSingerSong1=false,
           this.showSingerSong2=false,
           this.showSingerSong3=false,
           this.showHot=false,
           this.showSingerSong4=false,
           this.showQT=false
       },
       
       return2Jan :function(){

           this.singer=false,
           this.showOMS=false,
           this.showChinaS= false,
           this.showJanS=true,
           this.showKS= false,
           this.showSingerSong1=false,
           this.showSingerSong2=false,
           this.showSingerSong3=false,
           this.showHot=false,
           this.showSingerSong4=false,
           this.showQT=false
       },
       
       return2Korean :function(){
           this.singer=false,
           this.showOMS=false,
           this.showChinaS= false,
           this.showJanS=false,
           this.showKS= true,
           this.showSingerSong1=false,
           this.showSingerSong2=false,
           this.showSingerSong3=false,
           this.showSingerSong4=false,
           this.showHot=false,
           this.showQT=false
       },
       return2Hot:function(){
           this.singer=false,
           this.showOMS=false,
           this.showChinaS= false,
           this.showJanS=false,
           this.showKS= false,
           this.showSingerSong1=false,
           this.showSingerSong2=false,
           this.showSingerSong3=false,
           this.showSingerSong4=false,
           this.showSingerSong5=false,
           this.showHot=true ,
           this.showQT=false    
            

       },
       return2QT:function(){
           this.singer=false,
           this.showOMS=false,
           this.showChinaS= false,
           this.showJanS=false,
           this.showKS= false,
           this.showSingerSong1=false,
           this.showSingerSong2=false,
           this.showSingerSong3=false,
           this.showSingerSong4=false,
           this.showSingerSong5=false,
           this.showSingerSong6=false,
           this.showHot=false,
           this.showQT=true
       },
       returnPHB:function(){
           this.showphb=true;
           this.showPHB=false
       },

       //播放歌曲
       
        playMusic:function(musicID){ 
       
           var that = this;
            axios.get("https://autumnfish.cn/song/url?id="+musicID).then         //通过ID获取URL
            (function(response){
                   that.musicUrl=response.data.data[0].url;
                   console.log(that.musicUrl);
            },function(err){
                
            }
            );
        },
        //评论/
        comment:function(musicID){
           var that=this;
           axios.get("https://autumnfish.cn/comment/hot?id="+musicID+"&type=0")
           .then(function(res){
               that.hotComments = res.data.hotComments;
                   console.log(res);
           })
        },
       
           // axios.get('https://music.163.com/song/media/outer/url?id=' + musicID.mp3).then(
           //     function(response) {
           //      that.musicURL = response.config.url
           //      console.log(response);
           //     });
           
           // axios.get('http://localhost:3000/song/url?id='+musicID )
           // .then(function(res){
           //     console.log(res);//.mp3
           //     that.musicURL=res.config.url;
           //       //singerID=     'https://music.163.com/song/media/outer/url?id=   https://autumnfish.cn/song/url?id=
           // });
       
        
      //排行榜
      link:function(){
          var that=this;
          axios.get("https://autumnfish.cn/toplist/detail")
          .then(function(res){
              console.log(res);
              that.links=res.data.list;
              alert("~slow, please waiting~");
             
          })
      },
      phbMusic:function(phbID){
          var that=this;
          axios.get("https://autumnfish.cn/playlist/detail?id="+phbID)
          .then(function(res){
              that.phbSongs=res.data.playlist.tracks;
              console.log(that.phbSongs);
           
          })
      },

      phbSong:function(phbmusicID){
           axios.get("https://autumnfish.cn/song/detail?id="+phbmusicID)
           .then(function(res){
               console.log(res);
           })
      },


   }
})




