export const roles={student:'طالب',doctor:'مشرف أكاديمي',committee:'لجنة التقييم',admin:'مدير النظام'};
export const statusNames={active:'قيد التنفيذ',review:'بانتظار المراجعة',completed:'مكتمل',rejected:'يحتاج تعديلات'};
export function progress(tasks){return tasks.length?Math.round(tasks.filter(t=>t.status==='done').length/tasks.length*100):0}
export function risk(project,tasks,today=new Date()){const pct=progress(tasks);const days=Math.ceil((new Date(project.deadline+'T23:59:59')-today)/86400000);return pct===100?{level:'green',text:'مكتمل',tip:'جهّز العرض النهائي وأرشفة المخرجات.'}:days<0?{level:'red',text:'متأخر',tip:'راجع المشرف وأعد جدولة المهام المتبقية.'}:days<=7&&pct<75?{level:'gold',text:'يحتاج متابعة',tip:'ركّز على المهام الأساسية وحدد اجتماعاً مع المشرف.'}:{level:'green',text:'يسير بثبات',tip:'أكمل المهمة التالية وارفع مخرجاتك للمراجعة.'}}
export function validUsername(s){return /^[a-z][a-z0-9_]{2,23}$/.test(s)}
export function safeURL(s){try{let u=new URL(s);return ['https:','http:'].includes(u.protocol)?u.href:''}catch{return ''}}
