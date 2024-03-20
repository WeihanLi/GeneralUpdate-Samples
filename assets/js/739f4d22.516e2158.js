"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[504],{8843:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>o,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var r=t(4848),i=t(8453);const l={sidebar_position:4},s=void 0,a={id:"doc/GeneralUpdate.Differential",title:"GeneralUpdate.Differential",description:"\u5b9a\u4e49",source:"@site/docs/doc/GeneralUpdate.Differential.md",sourceDirName:"doc",slug:"/doc/GeneralUpdate.Differential",permalink:"/docs/doc/GeneralUpdate.Differential",draft:!1,unlisted:!1,editUrl:"https://github.com/GeneralLibrary/GeneralUpdate-Samples/tree/main/website/doc/docs/doc/GeneralUpdate.Differential.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"GeneralUpdate.Core",permalink:"/docs/doc/GeneralUpdate.Core"},next:{title:"GeneralUpdate.Zip",permalink:"/docs/doc/GeneralUpdate.Zip"}},c={},d=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u6ce8\u89e3",id:"\u6ce8\u89e3",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:4},{value:"\ud83c\udf3cClean()",id:"clean",level:3},{value:"\ud83c\udf3cDirty()",id:"dirty",level:3},{value:"\ud83c\udf3cSetBlocklist()",id:"setblocklist",level:3},{value:"\u9002\u7528\u4e8e",id:"\u9002\u7528\u4e8e",level:3}];function h(e){const n={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"\u5b9a\u4e49",children:"\u5b9a\u4e49"}),"\n",(0,r.jsx)(n.p,{children:"\u547d\u540d\u7a7a\u95f4\uff1aGeneralUpdate.Differential"}),"\n",(0,r.jsx)(n.p,{children:"\u7a0b\u5e8f\u96c6\uff1aGeneralUpdate.Differential.dll"}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u7ec4\u4ef6\u63d0\u4f9b\u6587\u4ef6\u7684\u4e8c\u8fdb\u5236\u5dee\u5206\u8865\u4e01\u6587\u4ef6\u751f\u6210\uff08\u7b97\u6cd5\uff09\uff0c\u6587\u4ef6\u589e\u91cf\u8bc6\u522b\uff08\u7248\u672c\u5dee\u5f02\uff09\u3001\u5220\u9664\u6587\u4ef6\u8bc6\u522b\uff08\u7248\u672c\u5dee\u5f02\uff09\u3001\u9ed1\u540d\u5355\u3001\u8865\u4e01\u8fd8\u539f\u7b49\u80fd\u529b\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c#",children:"public sealed class DifferentialCore\n"})}),"\n",(0,r.jsx)(n.p,{children:"nuget\u5b89\u88c5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"NuGet\\Install-Package GeneralUpdate.Differential -Version 1.0.0\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u793a\u4f8b\u5b9a\u4e49\u65b9\u6cd5\uff0c\u4ee5\u5305\u542b\u589e\u91cf\u8bc6\u522b\uff0c\u751f\u6210\u4e8c\u8fdb\u5236\u8865\u4e01\u3001\u8865\u4e01\u8fd8\u539f\u3001\u8bbe\u7f6e\u9ed1\u540d\u5355\u793a\u4f8bGeneralUpdate.Tools\u9879\u76ee\u4e2d\u7684\u6253\u5305\u5de5\u5177\u4e5f\u662f\u5f3a\u4f9d\u8d56\u6b64\u7ec4\u4ef6\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c#",children:'//\u589e\u91cf\u8bc6\u522b\uff0c\u751f\u6210\u4e8c\u8fdb\u5236\u8865\u4e01\r\npublic async Task TestDifferentialClean()\r\n{\r\n    //\u4e0a\u4e00\u4e2a\u7248\u672c\u7684\u5ba2\u6237\u7aef\u6587\u4ef6\u5939\u8def\u5f84\r\n    var path1 = "D:\\\\packet\\\\source";\r\n    //\u6700\u65b0\u7248\u672c\u5ba2\u6237\u7aef\u6587\u4ef6\u5939\u8def\u5f84\r\n    var path2 = "D:\\\\packet\\\\target";\r\n    //\u8865\u4e01\u6587\u4ef6\u751f\u6210\u8def\u5f84\r\n    var path3 = "D:\\\\packet\\\\patchs";\r\n    await DifferentialCore.Instance.Clean(path1, path2, path3);\r\n}\r\n\r\n//\u8865\u4e01\u8fd8\u539f\r\npublic async Task TestDifferentialDirty()\r\n{\r\n    //\u5f53\u524d\u7248\u672c\u7684\u5ba2\u6237\u7aef\u6587\u4ef6\u5939\u8def\u5f84\r\n    var path1 = "D:\\\\packet\\\\source";\r\n    //\u8865\u4e01\u6587\u4ef6\u751f\u6210\u8def\u5f84\r\n    var path2 = "D:\\\\packet\\\\patchs";\r\n    await DifferentialCore.Instance.Dirty(path1, path2);\r\n}\r\n\r\n//\u8bbe\u7f6e\u9ed1\u540d\u5355\r\npublic async Task TestSetBlocklist()\r\n{\r\n    //blackFiles\u96c6\u5408\u4e2d\u6307\u5b9a\u7684\u6587\u4ef6\u4e0d\u53c2\u4e0e\u66f4\u65b0\r\n    List<string> blackFiles = {"1.txt","abc.dll"};\r\n    //blackFileFormats\u96c6\u5408\u4e2d\u6307\u5b9a\u7684\u6587\u4ef6\u540e\u7f00\u6587\u4ef6\u4e0d\u53c2\u4e0e\u66f4\u65b0\r\n    List<string> blackFileFormats = {".dll" , "txt"}\r\n    await DifferentialCore.Instance.SetBlocklist(blackFiles, blackFileFormats);\r\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u6ce8\u89e3",children:"\u6ce8\u89e3"}),"\n",(0,r.jsx)(n.p,{children:"DifferentialCore\u63d0\u4f9b\u589e\u91cf\u8bc6\u522b\uff0c\u751f\u6210\u4e8c\u8fdb\u5236\u8865\u4e01\u3001\u8865\u4e01\u8fd8\u539f\u3001\u8bbe\u7f6e\u9ed1\u540d\u5355\u80fd\u529b\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u5907\u6ce8"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Clean()"}),(0,r.jsx)(n.td,{children:"\u65b9\u6cd5"}),(0,r.jsx)(n.td,{children:"\u589e\u91cf\u8bc6\u522b\uff0c\u5220\u9664\u6587\u4ef6\u8bc6\u522b\uff0c\u751f\u6210\u4e8c\u8fdb\u5236\u8865\u4e01\u6587\u4ef6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Dirty()"}),(0,r.jsx)(n.td,{children:"\u65b9\u6cd5"}),(0,r.jsx)(n.td,{children:"\u8865\u4e01\u8fd8\u539f\uff08\u5c06\u8865\u4e01\u6253\u5230\u65e7\u7684\u5ba2\u6237\u7aef\u6587\u4ef6\u4e0a\u8fbe\u5230\u66f4\u65b0\u7684\u76ee\u7684\uff09"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SetBlocklist()"}),(0,r.jsx)(n.td,{children:"\u65b9\u6cd5"}),(0,r.jsx)(n.td,{children:"\u8bbe\u7f6e\u9ed1\u540d\u5355\uff08\u6587\u4ef6\u3001\u6587\u4ef6\u540e\u7f00\uff09"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clean",children:"\ud83c\udf3cClean()"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u65b9\u6cd5"})}),"\n",(0,r.jsx)(n.p,{children:"Generate patch file [Cannot contain files with the same name but different extensions] ."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c#",children:"public async Task Clean(string sourcePath, string targetPath, string patchPath = null);\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"sourcePath"})," Previous version folder path ."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"targetPath"})," Recent version folder path."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"patchPath"})," Store discovered incremental update files in a temporary directory ."]}),"\n",(0,r.jsx)(n.h3,{id:"dirty",children:"\ud83c\udf3cDirty()"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u65b9\u6cd5"})}),"\n",(0,r.jsx)(n.p,{children:"Apply patch [Cannot contain files with the same name but different extensions] ."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c#",children:"public async Task Dirty(string appPath, string patchPath);\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"appPath"})," Client application directory ."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"patchPath"})," Patch file path."]}),"\n",(0,r.jsx)(n.h3,{id:"setblocklist",children:"\ud83c\udf3cSetBlocklist()"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u65b9\u6cd5"})}),"\n",(0,r.jsx)(n.p,{children:"Set a blacklist."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c#",children:"public void SetBlocklist(List<string> blackFiles, List<string> blackFileFormats);\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"blackFiles"})," A collection of blacklist files that are skipped when updated."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"blackFileFormats"})," A collection of blacklist file name extensions that are skipped on update."]}),"\n",(0,r.jsx)(n.h3,{id:"\u9002\u7528\u4e8e",children:"\u9002\u7528\u4e8e"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u4ea7\u54c1"}),(0,r.jsx)(n.th,{children:"\u7248\u672c"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".NET"}),(0,r.jsx)(n.td,{children:"5\u30016\u30017\u30018\u30019"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".NET Framework"}),(0,r.jsx)(n.td,{children:"4.6.1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".NET Standard"}),(0,r.jsx)(n.td,{children:"2.0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".NET Core"}),(0,r.jsx)(n.td,{children:"2.0"})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(6540);const i={},l=r.createContext(i);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);