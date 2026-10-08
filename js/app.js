const wa = t => `https://wa.me/${WHATSAPP}${t?`?text=${encodeURIComponent(t)}`:""}`;
const ig = `https://instagram.com/${INSTAGRAM}`;
const hi = "Hola Sublimon CR, quisiera información de sus productos.";
["waHero","waFoot"].forEach(i=>document.getElementById(i).href=wa(hi));
["igFoot"].forEach(i=>document.getElementById(i).href=ig);
["ttFoot"].forEach(i=>document.getElementById(i).href=`https://www.tiktok.com/@${TIKTOK}`);

const SHAPES = {
 botella:(c,s)=>`<rect x="86" y="22" width="28" height="22" rx="5" fill="#555"/><rect x="72" y="42" width="56" height="140" rx="18" fill="${c}" stroke="${s}" stroke-width="2"/><rect x="80" y="82" width="40" height="64" rx="4" fill="#fff" opacity=".8"/>`,
 vaso:(c,s)=>`<path d="M60 36h80l-10 142a8 8 0 0 1-8 8H78a8 8 0 0 1-8-8z" fill="${c}" stroke="${s}" stroke-width="2"/><rect x="76" y="76" width="48" height="64" rx="4" fill="#fff" opacity=".8"/>`,
 sudadera:(c,s)=>`<path d="M70 40 26 70l14 40 24-10v82h72v-82l24 10 14-40-44-30q-14 22-30 22T70 40z" fill="${c}" stroke="${s}" stroke-width="2"/><path d="M82 42q18 26 36 0" fill="none" stroke="${s}" stroke-width="3"/><rect x="82" y="104" width="36" height="40" rx="4" fill="#fff" opacity=".8"/>`,
 bolso:(c,s)=>`<path d="M72 70V50a28 28 0 0 1 56 0v20" fill="none" stroke="${s}" stroke-width="6"/><rect x="40" y="68" width="120" height="110" rx="14" fill="${c}" stroke="${s}" stroke-width="2"/><rect x="72" y="96" width="56" height="54" rx="4" fill="#fff" opacity=".8"/>`,
 reloj:(c,s)=>`<rect x="38" y="38" width="124" height="124" rx="16" fill="${c}" stroke="${s}" stroke-width="2"/><circle cx="100" cy="100" r="46" fill="#fff" opacity=".85"/><path d="M100 100V70M100 100l20 12" stroke="#444" stroke-width="4" stroke-linecap="round"/>`,
 espejo:(c,s)=>`<circle cx="100" cy="100" r="68" fill="${c}" stroke="${s}" stroke-width="2"/><circle cx="100" cy="100" r="50" fill="#fff" opacity=".8"/>`,
 retablo:(c,s)=>`<rect x="34" y="40" width="132" height="120" rx="8" fill="${c}" stroke="${s}" stroke-width="2"/><rect x="52" y="58" width="96" height="84" rx="4" fill="#fff" opacity=".8"/>`,
 bola:(c,s)=>`<rect x="90" y="18" width="20" height="16" rx="3" fill="#999"/><circle cx="100" cy="106" r="70" fill="${c}" stroke="${s}" stroke-width="2"/><circle cx="100" cy="106" r="40" fill="#fff" opacity=".8"/>`,
 libreta:(c,s)=>`<rect x="50" y="28" width="100" height="144" rx="8" fill="${c}" stroke="${s}" stroke-width="2"/><path d="M62 28v144" stroke="#999" stroke-width="3" stroke-dasharray="3 6"/><rect x="74" y="70" width="64" height="60" rx="4" fill="#fff" opacity=".8"/>`,
 estuche:(c,s)=>`<rect x="26" y="66" width="148" height="84" rx="14" fill="${c}" stroke="${s}" stroke-width="2"/><path d="M26 82h148" stroke="${s}" stroke-width="3" stroke-dasharray="6 5"/><rect x="56" y="94" width="88" height="46" rx="4" fill="#fff" opacity=".8"/>`,
 joyero:(c,s)=>`<path d="M40 80h120l12 18v50a8 8 0 0 1-8 8H36a8 8 0 0 1-8-8V98z" fill="${c}" stroke="${s}" stroke-width="2"/><rect x="52" y="86" width="96" height="14" rx="3" fill="#fff" opacity=".8"/><path d="M28 112h144" stroke="${s}" stroke-width="3"/>`,
 tote:(c,s)=>`<path d="M72 78V54a28 28 0 0 1 56 0v24" fill="none" stroke="${s}" stroke-width="7"/><rect x="38" y="76" width="124" height="108" rx="6" fill="${c}" stroke="${s}" stroke-width="2"/><rect x="66" y="102" width="68" height="60" rx="4" fill="#fff" opacity=".8"/>`,
 mameluco:(c,s)=>`<path d="M76 34 44 52l10 30 18-6v52q0 22 14 34h28q14-12 14-34V76l18 6 10-30-32-18q-8 14-24 14T76 34z" fill="${c}" stroke="${s}" stroke-width="2"/><rect x="82" y="84" width="36" height="34" rx="4" fill="#fff" opacity=".8"/><circle cx="100" cy="162" r="3" fill="${s}"/>`,
 taza:(c,s)=>`<path d="M130 80h20a15 15 0 0 1 0 50h-20" fill="none" stroke="${c}" stroke-width="11"/><path d="M50 60h80v90a10 10 0 0 1-10 10H60a10 10 0 0 1-10-10z" fill="${c}" stroke="${s}" stroke-width="2"/><rect x="62" y="85" width="56" height="44" rx="4" fill="#fff" opacity=".8"/>`,
 termo:(c,s)=>`<rect x="82" y="26" width="36" height="24" rx="6" fill="#555"/><rect x="72" y="48" width="56" height="134" rx="12" fill="${c}" stroke="${s}" stroke-width="2"/><rect x="80" y="78" width="40" height="60" rx="4" fill="#fff" opacity=".8"/>`,
 camiseta:(c,s)=>`<path d="M72 36 28 62l16 34 22-10v94h68V86l22 10 16-34-44-26q-10 16-30 16T72 36z" fill="${c}" stroke="${s}" stroke-width="2"/><rect x="80" y="76" width="40" height="44" rx="4" fill="#fff" opacity=".8"/>`,
 gorra:(c,s)=>`<path d="M42 126a58 58 0 0 1 116 0z" fill="${c}" stroke="${s}" stroke-width="2"/><path d="M42 126h134q6 16-24 18H42z" fill="${c}" stroke="${s}" stroke-width="2"/><rect x="78" y="88" width="44" height="26" rx="4" fill="#fff" opacity=".8"/>`,
 almohada:(c,s)=>`<rect x="26" y="48" width="148" height="112" rx="26" fill="${c}" stroke="${s}" stroke-width="2"/><rect x="58" y="76" width="84" height="56" rx="6" fill="#fff" opacity=".8"/>`,
 mousepad:(c,s)=>`<rect x="22" y="62" width="156" height="100" rx="16" fill="${c}" stroke="${s}" stroke-width="2"/><rect x="50" y="82" width="100" height="60" rx="6" fill="#fff" opacity=".8"/>`,
 llavero:(c,s)=>`<circle cx="100" cy="38" r="17" fill="none" stroke="#999" stroke-width="5"/><rect x="66" y="54" width="68" height="112" rx="12" fill="${c}" stroke="${s}" stroke-width="2"/><circle cx="100" cy="72" r="6" fill="#fff"/><rect x="78" y="96" width="44" height="52" rx="4" fill="#fff" opacity=".8"/>`,
 funda:(c,s)=>`<rect x="64" y="20" width="72" height="160" rx="18" fill="${c}" stroke="${s}" stroke-width="2"/><rect x="72" y="28" width="26" height="26" rx="8" fill="#000" opacity=".45"/><rect x="76" y="82" width="48" height="70" rx="4" fill="#fff" opacity=".8"/>`
};
const svg = (type,hex)=>`<svg viewBox="0 0 200 200" role="img" aria-label="${type}">${SHAPES[type](hex,"#b9b0a0")}</svg>`;

const grid = document.getElementById("grid"), chips = document.getElementById("chips");
const cats = ["Todos",...new Set(PRODUCTS.map(p=>p.cat))];
let current = "Todos";

function render(){
  grid.innerHTML = "";
  PRODUCTS.filter(p=>current==="Todos"||p.cat===current).forEach(p=>{
    let sel = 0, csel = 0;
    const el = document.createElement("article"); el.className="card";
    el.innerHTML = `<div class="art"><span class="tag">${p.cat}</span>${PHOTOS[p.name]?`<img src="${PHOTOS[p.name]}" alt="${p.name}" loading="lazy">`:svg(p.type,p.hex||"#ffffff")}</div><div class="body"><h3>${p.name}</h3><p>${p.desc}</p>${p.opts?`<div class="cn">${p.optLabel}: <b></b></div><div class="ops"></div>`:""}${p.colors?`<div class="cn">Color: <b class="cname"></b></div><div class="sw"></div>`:""}<div class="acts"><a class="btn wa" target="_blank" rel="noopener">💬 Consultar</a><button type="button" class="btn ig pers">🎨 Personalizar</button></div></div>`;
    const link = el.querySelector(".btn.wa");
    el.querySelector(".pers").onclick=()=>openCustom(PRODUCTS.indexOf(p),sel,csel);
    const upd = ()=>{
      const o = p.opts ? p.opts[sel] : "";
      const cn = p.colors ? p.colors[csel][0] : "";
      link.href = wa(`Hola Sublimon CR! Me interesa: ${p.name}${o?` (${p.optLabel}: ${o})`:""}${cn?` en color ${cn}`:""}. ¿Me pueden ayudar?`);
      if(p.colors){
        el.querySelector(".cname").textContent = cn;
        [...el.querySelector(".sw").children].forEach((b,i)=>b.setAttribute("aria-pressed",i===csel));
      }
      if(p.opts){
        el.querySelector(".cn b").textContent = o;
        [...el.querySelector(".ops").children].forEach((b,i)=>b.setAttribute("aria-pressed",i===sel));
      }
    };
    if(p.opts){
      const box = el.querySelector(".ops");
      p.opts.forEach((o,i)=>{
        const b = document.createElement("button"); b.className="op"; b.textContent=o;
        b.onclick=()=>{sel=i;upd()}; box.appendChild(b);
      });
    }
    if(p.colors){
      const sw = el.querySelector(".sw");
      p.colors.forEach(([n,hx],i)=>{
        const b = document.createElement("button"); b.type="button"; b.style.background=hx; b.title=n; b.setAttribute("aria-label",n);
        b.onclick=()=>{csel=i;upd()}; sw.appendChild(b);
      });
    }
    upd(); grid.appendChild(el);
  });
}
cats.forEach(c=>{
  const b=document.createElement("button"); b.className="chip"; b.textContent=c;
  b.setAttribute("aria-pressed",c===current);
  b.onclick=()=>{current=c;[...chips.children].forEach(x=>x.setAttribute("aria-pressed",x===b));render()};
  chips.appendChild(b);
});
render();

/* ===== Personalizador ===== */
const PRINT={taza:[62,85,56,44],botella:[80,82,40,64],vaso:[76,76,48,64],camiseta:[80,76,40,44],sudadera:[82,104,36,40],mameluco:[82,84,36,34],estuche:[56,94,88,46],joyero:[52,86,96,14],tote:[66,102,68,60],reloj:[54,54,92,92],espejo:[50,50,100,100],retablo:[52,58,96,84],bola:[60,66,80,80],libreta:[74,70,64,60],mousepad:[50,82,100,60],llavero:[78,96,44,52],funda:[76,82,48,70]};
const $=id=>document.getElementById(id);
const cv=$("cv"),cp=$("cProd"),co=$("cOpt");
let dImg=null,dFile=null,bgImg=null,bgKey="";
PRODUCTS.forEach((p,i)=>cp.add(new Option(p.name,i)));
function fillOpts(sel,csel){
  const p=PRODUCTS[cp.value];co.innerHTML="";
  $("cOptBox").style.display=p.opts?"":"none";
  if(p.opts){$("cOptLbl").textContent=p.optLabel;p.opts.forEach((o,i)=>co.add(new Option(o,i)));co.value=sel||0}
  const cc=$("cCol");cc.innerHTML="";$("cColBox").style.display=p.colors?"":"none";
  if(p.colors){p.colors.forEach(([n],i)=>cc.add(new Option(n,i)));cc.value=csel||0}
}
const hexOf=p=>p.colors?p.colors[$("cCol").value||0][1]:(p.hex||"#ffffff");
function draw(){
  const p=PRODUCTS[cp.value],ctx=cv.getContext("2d");
  const hx=hexOf(p),key=p.type+hx;
  if(key!==bgKey){
    const s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="400" height="400">${SHAPES[p.type](hx,"#b9b0a0")}</svg>`;
    const im=new Image();im.onload=()=>{bgImg=im;bgKey=key;draw()};im.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(s);return;
  }
  ctx.clearRect(0,0,400,400);ctx.fillStyle="#f4f1ea";ctx.fillRect(0,0,400,400);
  ctx.drawImage(bgImg,0,0,400,400);
  const [x,y,w,h]=(PRINT[p.type]||[60,60,80,80]).map(v=>v*2);
  if(dImg){
    ctx.save();ctx.beginPath();ctx.rect(x,y,w,h);ctx.clip();
    const s=Math.min(w/dImg.width,h/dImg.height)*(+$("cSize").value/100);
    ctx.translate(x+w/2+(+$("cX").value/100)*w/2,y+h/2+(+$("cY").value/100)*h/2);
    ctx.rotate(+$("cRot").value*Math.PI/180);
    ctx.drawImage(dImg,-dImg.width*s/2,-dImg.height*s/2,dImg.width*s,dImg.height*s);
    ctx.restore();
  }else{
    ctx.fillStyle="#8a8299";ctx.font="bold 15px Nunito,sans-serif";ctx.textAlign="center";
    ctx.fillText("Tu diseño aquí",x+w/2,y+h/2+5);
  }
  ctx.setLineDash([5,4]);ctx.strokeStyle="#7c6fb0";ctx.lineWidth=1.5;ctx.strokeRect(x,y,w,h);ctx.setLineDash([]);
}
function openCustom(i,sel,csel){
  cp.value=i;fillOpts(sel,csel);draw();
  $("personalizar").scrollIntoView({behavior:"smooth"});
}
cp.onchange=()=>{fillOpts(0,0);draw()};
$("cCol").onchange=draw;
["cSize","cX","cY","cRot"].forEach(id=>$(id).oninput=draw);
$("cFile").onchange=e=>{
  const f=e.target.files[0];$("cErr").textContent="";
  if(!f)return;
  if(!f.type.startsWith("image/")){$("cErr").textContent="Elegí un archivo de imagen (PNG, JPG, etc.).";return}
  if(f.size>15*1024*1024){$("cErr").textContent="La imagen es muy pesada (máximo 15 MB).";return}
  const r=new FileReader();
  r.onload=()=>{const im=new Image();im.onload=()=>{dImg=im;dFile=f;draw()};im.onerror=()=>{$("cErr").textContent="No pudimos leer esa imagen."};im.src=r.result};
  r.readAsDataURL(f);
};
function msg(){
  const p=PRODUCTS[cp.value],o=p.opts?p.opts[co.value]:"",cl=p.colors?p.colors[$("cCol").value][0]:"",n=$("cNote").value.trim();
  return `Hola Sublimon CR! Quiero personalizar: ${p.name}${o?` (${p.optLabel}: ${o})`:""}${cl?` en color ${cl}`:""}. Cantidad: ${$("cQty").value||1}.${n?` Detalles: ${n}.`:""}${dImg?" Te envío mi diseño por este chat.":" Aún no tengo el diseño listo."}`;
}
$("cSend").onclick=()=>window.open(wa(msg()),"_blank","noopener");
if(navigator.share&&navigator.canShare){
  $("cShare").hidden=false;
  $("cShare").onclick=async()=>{
    try{
      const blob=await new Promise(r=>cv.toBlob(r,"image/png"));
      const files=[new File([blob],"vista-previa-sublimon.png",{type:"image/png"})];
      if(dFile)files.push(dFile);
      if(navigator.canShare({files}))await navigator.share({files,text:msg()});
      else $("cErr").textContent="Tu navegador no permite compartir imágenes. Usá el botón de WhatsApp.";
    }catch(e){if(e&&e.name!=="AbortError")$("cErr").textContent="No se pudo compartir. Usá el botón de WhatsApp."}
  };
}
fillOpts(0,0);draw();

/* ===== Estilo OkMae: hero, categorías, botón flotante ===== */
$("waFab").href=wa(hi);
["Taza con asa e interior de color","Sudadera con gorro","Bolso de mano de yute"].forEach((n,i)=>{
  if(PHOTOS[n])$("tiles").children[i].style.backgroundImage=`url(${PHOTOS[n]})`;
});
cats.filter(c=>c!=="Todos").forEach(c=>{
  const first=PRODUCTS.find(p=>p.cat===c),b=document.createElement("button");
  b.className="cat";b.type="button";
  b.innerHTML=`<div class="ph"></div><b>${c}</b>`;
  if(first){const u=PHOTOS[first.name]||("data:image/svg+xml;charset=utf-8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">${SHAPES[first.type](first.hex||"#ffffff","#b9b0a0")}</svg>`));b.firstChild.style.backgroundImage=`url("${u}")`;}
  b.onclick=()=>{current=c;[...chips.children].forEach(x=>x.setAttribute("aria-pressed",x.textContent===c));render();$("catalogo").scrollIntoView({behavior:"smooth"})};
  $("cats").appendChild(b);
});
