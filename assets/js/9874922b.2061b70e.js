"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36],{9869:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=r(4848),i=r(8453);const t={sidebar_position:6},d=void 0,l={id:"doc/GeneralClient.OSS",title:"GeneralClient.OSS",description:"\u5b9a\u4e49",source:"@site/docs/doc/GeneralClient.OSS.md",sourceDirName:"doc",slug:"/doc/GeneralClient.OSS",permalink:"/docs/doc/GeneralClient.OSS",draft:!1,unlisted:!1,editUrl:"https://github.com/GeneralLibrary/GeneralUpdate-Samples/tree/main/website/doc/docs/doc/GeneralClient.OSS.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"GeneralUpdate.Zip",permalink:"/docs/doc/GeneralUpdate.Zip"},next:{title:"GeneralUpdate.Maui.OSS",permalink:"/docs/doc/GeneralUpdate.Maui.OSS"}},c={},a=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"OSS\u6d41\u7a0b",id:"oss\u6d41\u7a0b",level:4},{value:"\u6ce8\u89e3",id:"\u6ce8\u89e3",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:4},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:4},{value:"\ud83c\udf34ParamsOSS",id:"paramsoss",level:3},{value:"\ud83c\udf3cStart()",id:"start",level:3},{value:"\ud83c\udf3cAddListenerDownloadProcess()",id:"addlistenerdownloadprocess",level:3},{value:"\ud83c\udf3cAddListenerException()",id:"addlistenerexception",level:3},{value:"\u9002\u7528\u4e8e",id:"\u9002\u7528\u4e8e",level:3}];function o(e){const n={code:"code",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"\u5b9a\u4e49",children:"\u5b9a\u4e49"}),"\n",(0,s.jsx)(n.p,{children:"\u547d\u540d\u7a7a\u95f4\uff1aGeneralUpdate.ClientCore"}),"\n",(0,s.jsx)(n.p,{children:"\u7a0b\u5e8f\u96c6\uff1aGeneralUpdate.ClientCore.dll"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"OSS"})}),"\n",(0,s.jsx)(n.p,{children:"OSS\u7684\u5168\u79f0\u662f\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\uff08Object Storage Service\uff09\uff0c\u505a\u670d\u52a1\u7aef\u6280\u672f\u6808\u5f00\u53d1\u7684\u5c0f\u4f19\u4f34\u80af\u5b9a\u5bf9\u8fd9\u4e2a\u4e0d\u964c\u751f\u5728 \u5404\u5927\u4e91\u670d\u52a1\u5668\u5382\u5546\u90fd\u4f1a\u63d0\u4f9b\u7c7b\u4f3c\u7684\u670d\u52a1,\u8bf4\u7b80\u5355\u70b9\u5c31\u662f\u4e00\u4e2a\u6587\u4ef6\u670d\u52a1\u5668\u3002\u4f8b\u5982\uff1a\u963f\u91cc\u4e91OSS\u3001\u817e\u8baf\u4e91COS\u3001\u534e \u4e3a\u4e91OBS\uff0c\u5176\u5b9e\u5b83\u4eec\u53ea\u662f\u540d\u5b57\u4e0d\u4e00\u6837\u529f\u80fd\u670d\u52a1\u90fd\u5dee\u4e0d\u591a\u3002\u7136\u540e\u672c\u66f4\u65b0\u7ec4\u4ef6\u65b0\u529f\u80fd\u7684\u5b9e\u73b0\u601d\u8def\u975e\u5e38\u76f8\u4f3c\u90a3\u4e48\u5c31 \u9009\u62e9\u4e86OSS\u6765\u4e3a\u8be5\u529f\u80fd\u547d\u540d\uff0c\u800c\u4e14\u65b9\u4fbf\u5f00\u53d1\u8005\u4e00\u773c\u80fdget\u5230\u8fd9\u4e2a\u529f\u80fd\u7684\u4f5c\u7528\uff08\u9700\u8981\u4f7f\u7528\u7ec4\u4ef6 GeneralUpdate.ClientCore\u3001GeneralUpdate.Core\uff09\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"GeneralClientOSS"})}),"\n",(0,s.jsx)(n.p,{children:"GeneralClientOSS\u7c7b\u662f\u53e6\u5916\u4e00\u79cd\u66f4\u65b0\u673a\u5236\u4e0eGeneralClientBootstrap\u4e0d\u540c\u7684\u662f\uff0cGeneralClientOSS\u4e0d\u9700\u8981\u7f16\u5199\u670d\u52a1\u7aef\u7684\u4ee3\u7801\u76f4\u63a5\u6839\u636eOSS\u6587\u4ef6\u670d\u52a1\u5668\u7684version.josn\u7684\u7248\u672c\u4fe1\u606f\u8fdb\u884c\u66f4\u65b0\uff0c\u7b80\u5316\u4e86\u65b0\u624b\u4f7f\u7528\u672c\u7ec4\u4ef6\u7684\u95e8\u69db\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c#",children:"public sealed class GeneralClientOSS\n"})}),"\n",(0,s.jsx)(n.p,{children:"nuget\u5b89\u88c5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"NuGet\\Install-Package GeneralUpdate.ClientCore -Version 1.0.0\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.h4,{id:"oss\u6d41\u7a0b",children:"OSS\u6d41\u7a0b"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(5153).A+"",width:"1215",height:"645"})}),"\n",(0,s.jsx)(n.p,{children:"1.\u51c6\u5907version.json\u7248\u672c\u4fe1\u606f\u914d\u7f6e\u6587\u4ef6\uff0c\u66f4\u65b0\u6587\u4ef6\uff08update.zip\uff09\u66f4\u65b0\u6587\u4ef6\u548c\u4e4b\u524d\u7684\u6253\u5305\u65b9\u5f0f\u4e00\u6837\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(9456).A+"",width:"759",height:"605"})}),"\n",(0,s.jsx)(n.p,{children:"2.Client\u542f\u52a8\u65f6\u76f4\u63a5\u8bf7\u6c42OSS\u670d\u52a1\u5668\u6216\u6587\u4ef6\u670d\u52a1\u5668\uff0c\u4e0b\u8f7dversion.json\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(3841).A+"",width:"1115",height:"610"})}),"\n",(0,s.jsx)(n.p,{children:"3.\u4e0b\u8f7d\u5230\u672c\u5730\u4e4b\u540e\u89e3\u6790\u7248\u672c\u4fe1\u606f\u5185\u5bb9\u5224\u65ad\u662f\u5426\u9700\u8981\u66f4\u65b0\uff0c\u5982\u679c\u5c06\u4fe1\u606f\u901a\u8fc7\u8fdb\u7a0b\u542f\u52a8\u4f20\u9012Upgrade\uff08Client\u81ea\u6211 \u5173\u95ed\uff09\u3002"}),"\n",(0,s.jsx)(n.p,{children:"4.Upgrade\u542f\u52a8\u4e4b\u540e\u76f4\u63a5\u53bb\u4e0b\u8f7dupdate.zip\uff0c\u4e0b\u8f7d\u5230\u672c\u5730\u4e4b\u540e\u76f4\u63a5\u89e3\u538b\u8986\u76d6\u672c\u5730\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(n.p,{children:"5.Upgrade\u66f4\u65b0\u5b8c\u6210\u4e4b\u540e\u628aClient\u542f\u52a8\u8d77\u6765\uff0c\u81ea\u6211\u5173\u95ed\u3002\u66f4\u65b0\u7ed3\u675f\u3002 GeneralUpdateOSS\u7684\u529f\u80fd\u548cGeneralUpdateBootstrap\u529f\u80fd\u5bf9\u6bd4\u6765\u8bf4\uff0c\u4f7f\u7528\u7684\u95e8\u69db\u975e\u5e38\u4f4e\u5982\u679c\u516c\u53f8\u5bf9\u81ea\u52a8 \u66f4\u65b0\u7684\u8981\u6c42\u4e0d\u9ad8\u7684\u8bdd\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u529f\u80fd\u3002\u4e00\u53e5\u8bdd\u6982\u62ec\u8fd9\u4e2a\u529f\u80fd\u5c31\u662f\u4e0b\u8f7dversion.json\u6839\u636e\u6587\u4ef6\u91cc\u7684\u5185\u5bb9\u53bb\u9010 \u7248\u672c\u4e0b\u8f7d\u66f4\u65b0\u5305\uff0c\u4e0b\u8f7d\u4e0b\u6765\u4e4b\u540e\u76f4\u63a5\u89e3\u538b\u66f4\u65b0\u5c31\u7ed3\u675f\u4e86\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u793a\u4f8b\u5b9a\u4e49\u65b9\u6cd5\uff0c\u5305\u542bGeneralClientOSS\u4f7f\u7528\u65b9\u6cd5\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c#",children:'Task.Run(async () =>\r\n{\r\n    var url = "http://192.168.50.203";\r\n    var apk = "com.companyname.generalupdate.ossclient.apk";\r\n    var authority = "com.generalupdate.oss.fileprovider";\r\n    var currentVersion = "1.0.0.0";\r\n    var versionFileName = "version.json";\r\n    GeneralClientOSS.AddListenerDownloadProcess(OnOSSDownload);\r\n    GeneralClientOSS.AddListenerException(OnException);\r\n    await GeneralClientOSS.Start<Strategy>(new ParamsOSS(url, apk, authority, currentVersion, versionFileName));\r\n});\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u6ce8\u89e3",children:"\u6ce8\u89e3"}),"\n",(0,s.jsx)(n.p,{children:"GeneralUpdateOSS\u63d0\u4f9b\u4ee5\u4e0b\u80fd\u529b\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"\u5c5e\u6027",children:"\u5c5e\u6027"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Properties"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ParamsOSS"}),(0,s.jsx)(n.td,{children:"OSS\u66f4\u65b0\u914d\u7f6e\u53c2\u6570\u3002"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Method"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Start()"}),(0,s.jsx)(n.td,{children:"Starting an OSS update ."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AddListenerException()"}),(0,s.jsx)(n.td,{children:"Listen for internal exception information."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"paramsoss",children:"\ud83c\udf34ParamsOSS"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u5c5e\u6027"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Url"})," string http\u7684api\u670d\u52a1\u7aef\u8bf7\u6c42\u5730\u5740\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"AppName"})," string \u5e94\u7528\u540d\u79f0\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CurrentVersion"})," string \u5f53\u524d\u7248\u672c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VersionFileName"})," string \u7248\u672c\u6587\u4ef6\u540d\u79f0\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"start",children:"\ud83c\udf3cStart()"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u65b9\u6cd5"})}),"\n",(0,s.jsx)(n.p,{children:"Starting an OSS update."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c#",children:'public static async Task Start(ParamsOSS configParams, string upgradeAppName = "GeneralUpdate.Upgrade");\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570\u7c7b\u578b"})}),"\n",(0,s.jsx)(n.p,{children:"ParamsOSS \u66f4\u65b0\u914d\u7f6e\u53c2\u6570\uff0c\u8be6\u7ec6\u5185\u5bb9\u53c2\u8003\u672c\u6587\u6863\ud83c\udf34ParamsOSS\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parameter"})," ParamsOSS\u5b89\u5353\u5e73\u53f0\u7684\u8ddf\u65b0\u914d\u7f6e\u53c2\u6570\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"upgradeAppName"})," \u9700\u8981\u5347\u7ea7\u7684\u5e94\u7528\u540d\u79f0\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"addlistenerdownloadprocess",children:"\ud83c\udf3cAddListenerDownloadProcess()"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u65b9\u6cd5"})}),"\n",(0,s.jsx)(n.p,{children:"Monitor download progress."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c#",children:"public static void AddListenerDownloadProcess(Action<object, OSSDownloadArgs> callbackAction);\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570\u7c7b\u578b"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"sender"})," object"]}),"\n",(0,s.jsx)(n.p,{children:"\u64cd\u4f5c\u53e5\u67c4\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"args"})," OSSDownloadArgs"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u8f7d\u8fdb\u5ea6\u901a\u77e5\u53c2\u6570\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c#",children:"callbackAction Action<object, OSSDownloadArgs> \n"})}),"\n",(0,s.jsx)(n.p,{children:"\u76d1\u542c\u5f53\u524d\u7248\u672c\u4e0b\u8f7d\u8fdb\u5ea6\u4e8b\u4ef6\u56de\u4f20\u53c2\u6570\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"addlistenerexception",children:"\ud83c\udf3cAddListenerException()"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u65b9\u6cd5"})}),"\n",(0,s.jsx)(n.p,{children:"Listen for internal exception information."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c#",children:"public static void AddListenerException(Action<object, ExceptionEventArgs> callbackAction);\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570\u7c7b\u578b"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"sender"})," object"]}),"\n",(0,s.jsx)(n.p,{children:"\u64cd\u4f5c\u53e5\u67c4\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"args"})," ExceptionEventArgs"]}),"\n",(0,s.jsx)(n.p,{children:"\u66f4\u65b0\u5f02\u5e38\u53c2\u6570\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c#",children:"callbackAction Action<object, ExceptionEventArgs> \n"})}),"\n",(0,s.jsx)(n.p,{children:"\u76d1\u542c\u5f53\u524d\u7248\u672c\u4e0b\u8f7d\u8fdb\u5ea6\u4e8b\u4ef6\u56de\u4f20\u53c2\u6570\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u9002\u7528\u4e8e",children:"\u9002\u7528\u4e8e"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u4ea7\u54c1"}),(0,s.jsx)(n.th,{children:"\u7248\u672c"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:".NET"}),(0,s.jsx)(n.td,{children:"5\u30016\u30017\u30018\u30019"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:".NET Framework"}),(0,s.jsx)(n.td,{children:"4.6.1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:".NET Standard"}),(0,s.jsx)(n.td,{children:"2.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:".NET Core"}),(0,s.jsx)(n.td,{children:"2.0"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},5153:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/oss_flow-f7a562c7e8af581b98277ae67a6a04dd.png"},3841:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/oss_util-1335e574b44329127294455f726a7ee4.png"},9456:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/oss_version_json-44cf45229df5af31c429ea66ae2bfdc0.png"},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var s=r(6540);const i={},t=s.createContext(i);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);