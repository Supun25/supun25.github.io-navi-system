// ═══════════════════════════════════════════════════
//  UCSC LOCATIONS DATABASE
// ═══════════════════════════════════════════════════
const LOCS = [
  // FLOOR 1
  {id:'1-entrance',  name:'Main Entrance', f:'1', type:'other', dot:'dot-other',
   wing:'east',  pos:'entrance', group:'access'},
  {id:'1-laba',      name:'Lab A', f:'1', type:'lab', dot:'dot-lab',
   wing:'west',  pos:'far-west', group:'labs'},
  {id:'1-labb',      name:'Lab B', f:'1', type:'lab', dot:'dot-lab',
   wing:'west',  pos:'west', group:'labs'},
  {id:'1-labc',      name:'Lab C', f:'1', type:'lab', dot:'dot-lab',
   wing:'west',  pos:'west', group:'labs'},
  {id:'1-labd',      name:'Lab D', f:'1', type:'lab', dot:'dot-lab',
   wing:'west',  pos:'west', group:'labs'},
  {id:'1-labe',      name:'Lab E', f:'1', type:'lab', dot:'dot-lab',
   wing:'west',  pos:'west', group:'labs'},
  {id:'1-scr-west',  name:'Student Common Room (West, 1F)', f:'1', type:'student', dot:'dot-student',
   wing:'west',  pos:'center-west', group:'student'},
  {id:'1-noc',       name:'Network Operating Center (NOC)', f:'1', type:'division', dot:'dot-division',
   wing:'north', pos:'north', group:'divisions'},
  {id:'1-postgrad',  name:'Postgraduate Division', f:'1', type:'division', dot:'dot-division',
   wing:'north', pos:'north', group:'divisions'},
  {id:'1-apd',       name:'Academic & Publications Division', f:'1', type:'division', dot:'dot-division',
   wing:'north', pos:'north-east', group:'divisions'},
  {id:'1-erd',       name:'Examinations & Registrations Div.', f:'1', type:'division', dot:'dot-division',
   wing:'north', pos:'north-east', group:'divisions'},
  {id:'1-scr-north', name:'Student Common Room (North, 1F)', f:'1', type:'student', dot:'dot-student',
   wing:'north', pos:'north-top', group:'student'},
  {id:'1-s102',      name:'S102 (Lecture Hall)', f:'1', type:'lecture', dot:'dot-lecture',
   wing:'center',pos:'center', group:'halls'},
  {id:'1-s104',      name:'S104 (Lecture Hall)', f:'1', type:'lecture', dot:'dot-lecture',
   wing:'center',pos:'center-south', group:'halls'},
  {id:'1-museum',    name:'UCSC Computer Museum', f:'1', type:'museum', dot:'dot-museum',
   wing:'center',pos:'center', group:'facilities'},
  {id:'1-shroff',    name:'Shroff Counter', f:'1', type:'other', dot:'dot-other',
   wing:'center',pos:'center-east', group:'facilities'},
  {id:'1-waitlob',   name:'Waiting Lobby', f:'1', type:'other', dot:'dot-other',
   wing:'center',pos:'center-east', group:'facilities'},
  {id:'1-studyarea', name:'Students Study Area', f:'1', type:'student', dot:'dot-student',
   wing:'east',  pos:'east', group:'student'},
  {id:'1-toilets',   name:'Toilets (1F)', f:'1', type:'other', dot:'dot-other',
   wing:'east',  pos:'east', group:'facilities'},
  {id:'1-library',   name:'Library Entrance (1F)', f:'1', type:'library', dot:'dot-library',
   wing:'east',  pos:'far-east', group:'facilities'},
  {id:'1-oldlift',   name:'Old Lift (1F)', f:'1', type:'lift', dot:'dot-lift',
   wing:'center',pos:'center', group:'access'},
  {id:'1-newlift',   name:'New Lift (1F)', f:'1', type:'lift', dot:'dot-lift',
   wing:'center',pos:'center', group:'access'},
  {id:'1-stairs',    name:'Stairs (1F)', f:'1', type:'lift', dot:'dot-lift',
   wing:'center',pos:'center', group:'access'},

  // FLOOR 2
  {id:'2-irque',     name:'IRQUE Lab', f:'2', type:'lab', dot:'dot-lab',
   wing:'north', pos:'north-west', group:'labs'},
  {id:'2-e205',      name:'Mini Auditorium / E205', f:'2', type:'lecture', dot:'dot-lecture',
   wing:'north', pos:'north', group:'halls'},
  {id:'2-library',   name:'Library', f:'2', type:'library', dot:'dot-library',
   wing:'north', pos:'north-east', group:'facilities'},
  {id:'2-libcounter',name:'Library Counter', f:'2', type:'library', dot:'dot-library',
   wing:'east',  pos:'east', group:'facilities'},
  {id:'2-scr',       name:'Student Common Room (2F)', f:'2', type:'student', dot:'dot-student',
   wing:'west',  pos:'center-west', group:'student'},
  {id:'2-s202',      name:'S202 (Lecture Hall)', f:'2', type:'lecture', dot:'dot-lecture',
   wing:'center',pos:'center', group:'halls'},
  {id:'2-s203',      name:'S203 (Lecture Hall)', f:'2', type:'lecture', dot:'dot-lecture',
   wing:'center',pos:'center-south', group:'halls'},
  {id:'2-toilets',   name:'Toilets (2F)', f:'2', type:'other', dot:'dot-other',
   wing:'east',  pos:'east', group:'facilities'},
  {id:'2-bagslocker',name:'Bags Locker / Library Entrance', f:'2', type:'other', dot:'dot-other',
   wing:'east',  pos:'east', group:'facilities'},
  {id:'2-corridor',  name:'Main Corridor (2F)', f:'2', type:'other', dot:'dot-other',
   wing:'center',pos:'center-east', group:'access'},
  {id:'2-oldlift',   name:'Old Lift (2F)', f:'2', type:'lift', dot:'dot-lift',
   wing:'center',pos:'center', group:'access'},
  {id:'2-newlift',   name:'New Lift (2F)', f:'2', type:'lift', dot:'dot-lift',
   wing:'center',pos:'center', group:'access'},
  {id:'2-stairs',    name:'Stairs (2F)', f:'2', type:'lift', dot:'dot-lift',
   wing:'center',pos:'center', group:'access'},

  // FLOOR 3
  {id:'3-elearn',    name:'E-Learning Center', f:'3', type:'division', dot:'dot-division',
   wing:'north', pos:'north-top', group:'divisions'},
  {id:'3-admtcsr',   name:'ADMTC Seminar Room', f:'3', type:'division', dot:'dot-division',
   wing:'north', pos:'north', group:'divisions'},
  {id:'3-boardroom1',name:'Boardroom 1', f:'3', type:'other', dot:'dot-other',
   wing:'north', pos:'north', group:'facilities'},
  {id:'3-boardroom2',name:'Boardroom 2', f:'3', type:'other', dot:'dot-other',
   wing:'center',pos:'center', group:'facilities'},
  {id:'3-directors', name:"Director's Office", f:'3', type:'admin', dot:'dot-admin',
   wing:'center',pos:'center', group:'admin'},
  {id:'3-digital',   name:'Digital Studio', f:'3', type:'digital', dot:'dot-digital',
   wing:'north', pos:'north-east', group:'facilities'},
  {id:'3-admindiv',  name:'Administration Division', f:'3', type:'division', dot:'dot-division',
   wing:'east',  pos:'east', group:'divisions'},
  {id:'3-pdc',       name:'PDC Room', f:'3', type:'other', dot:'dot-other',
   wing:'north', pos:'north-center', group:'facilities'},
  {id:'3-ssp',       name:'SSP / ADMTC Coordinator', f:'3', type:'admin', dot:'dot-admin',
   wing:'center',pos:'center', group:'admin'},
  {id:'3-wvw',       name:'WVW – Head of ISE', f:'3', type:'admin', dot:'dot-admin',
   wing:'north', pos:'north', group:'admin'},
  {id:'3-cik-hd',    name:'CIK – Head of CIS', f:'3', type:'admin', dot:'dot-admin',
   wing:'north', pos:'north', group:'admin'},
  {id:'3-tnk',       name:'TNK – Deputy Director', f:'3', type:'admin', dot:'dot-admin',
   wing:'north', pos:'north', group:'admin'},
  {id:'3-aja-dir',   name:'AJA – Director', f:'3', type:'admin', dot:'dot-admin',
   wing:'north', pos:'north', group:'admin'},
  {id:'3-instrroom', name:'Instructors Room', f:'3', type:'other', dot:'dot-other',
   wing:'west',  pos:'west', group:'facilities'},
  {id:'3-problect',  name:'Probationary Lecturers Room', f:'3', type:'other', dot:'dot-other',
   wing:'west',  pos:'west', group:'facilities'},
  {id:'3-toilets',   name:'Toilets (3F)', f:'3', type:'other', dot:'dot-other',
   wing:'east',  pos:'east', group:'facilities'},
  {id:'3-oldlift',   name:'Old Lift (3F)', f:'3', type:'lift', dot:'dot-lift',
   wing:'center',pos:'center', group:'access'},
  {id:'3-newlift',   name:'New Lift (3F)', f:'3', type:'lift', dot:'dot-lift',
   wing:'center',pos:'center', group:'access'},
  {id:'3-stairs',    name:'Stairs (3F)', f:'3', type:'lift', dot:'dot-lift',
   wing:'center',pos:'center', group:'access'},
  // S-series staff cubicles (south block)
  ...[['s304','AJA'],['s305','KPH'],['s306','SDA'],['s307','GKAD'],['s308','CRW'],
      ['s309','GPS'],['s310','TNK'],['s311','DNR'],['s312','WVW'],['s313','ARW'],
      ['s314','DDK'],['s315','KLJ'],['s316','CIK'],['s317','RTS'],['s318','NAS'],
      ['s319','MKS'],['s320','HAC'],['s321','RND'],['s322','SPW'],['s323','TAW']
  ].map(([code,name])=>({
    id:`3-${code}`, name:`${code.toUpperCase()} – ${name}`, f:'3', type:'admin', dot:'dot-admin',
    wing:'south', pos:'south-block', group:'staff-cubicles'
  })),
  // W-series staff rooms
  ...[['w301','CRC/PDL'],['w302','KGG/TNB'],['w303','ENO/YSR'],['w304','SSP/CLI'],
      ['w305','LNC/HND'],['w307','HBE'],['w308','MIE/KMT'],['w309','GPN/DTB'],
      ['w310','DSR/ASA'],['w311','DGS/UAR'],['w312','RPN/RJA'],['w313','KTK/DKF'],['w314','']
  ].map(([code,name])=>({
    id:`3-${code}`, name:`${code.toUpperCase()}${name?' – '+name:''}`, f:'3', type:'admin', dot:'dot-admin',
    wing:'west', pos:'west-block', group:'staff-rooms'
  })),

  // FLOOR 4
  {id:'4-e401',      name:'E401 – 4th Floor Lecture Hall', f:'4', type:'lecture', dot:'dot-lecture',
   wing:'north', pos:'north', group:'halls'},
  {id:'4-research',  name:'Research Area', f:'4', type:'research', dot:'dot-research',
   wing:'west',  pos:'west', group:'facilities'},
  {id:'4-auditorium',name:'VK Samaranayake Auditorium', f:'4', type:'other', dot:'dot-other',
   wing:'center',pos:'center-south', group:'facilities'},
  {id:'4-finance',   name:'Finance Division', f:'4', type:'division', dot:'dot-division',
   wing:'east',  pos:'east', group:'divisions'},
  {id:'4-newlift',   name:'New Lift (4F)', f:'4', type:'lift', dot:'dot-lift',
   wing:'center',pos:'center', group:'access'},
  {id:'4-stairs',    name:'Stairs (4F)', f:'4', type:'lift', dot:'dot-lift',
   wing:'center',pos:'center', group:'access'},
];

// ═══════════════════════════════════════════════════
//  ROUTING ENGINE — pure JavaScript, no API needed
// ═══════════════════════════════════════════════════

// Wing/position descriptions for readable directions
const WING_DESC = {
  'north':'the north wing', 'south':'the south block', 'east':'the east wing',
  'west':'the west wing', 'center':'the central area', 'far-west':'the far west wing',
  'far-east':'the far east', 'center-west':'the central-west area',
  'center-east':'the central-east area','center-south':'the central-south area',
  'north-east':'the north-east wing','north-west':'the north-west area',
  'north-top':'the top of the north wing','north-center':'the north-central corridor',
  'west-block':'the west block','south-block':'the south block',
  'entrance':'the main entrance'
};
function wingOf(loc) { return WING_DESC[loc.pos] || WING_DESC[loc.wing] || 'the building'; }

function floorName(f) {
  return {1:'1st',2:'2nd',3:'3rd',4:'4th'}[parseInt(f)] + ' floor';
}

// Determine horizontal move direction between wings on same floor
function horizontalDir(fromWing, toWing) {
  const order = ['far-west','west','west-block','center-west','center','north-center','center-east','east','far-east'];
  const fi = order.indexOf(fromWing) === -1 ? order.indexOf('center') : order.indexOf(fromWing);
  const ti = order.indexOf(toWing)   === -1 ? order.indexOf('center') : order.indexOf(toWing);
  if (ti > fi) return 'east (right)';
  if (ti < fi) return 'west (left)';
  return null;
}

function verticalDir(fromPos, toPos) {
  const northish = ['north','north-top','north-east','north-west','north-center'];
  const southish = ['south','south-block','center-south'];
  const fn = northish.includes(fromPos), fs = southish.includes(fromPos);
  const tn = northish.includes(toPos),   ts = southish.includes(toPos);
  if (tn && !fn) return 'north (towards the north wing)';
  if (ts && !fs) return 'south (towards the south block)';
  return null;
}

// How far apart are two positions? Rough step estimate
function stepsBetween(a, b) {
  const posScore = {
    'far-west':0,'west-block':1,'west':2,'center-west':3,'center':4,
    'north-center':4,'center-east':5,'east':6,'far-east':7,
    'north-top':2,'north':3,'north-east':4,'north-west':3,
    'south-block':5,'south':5,'center-south':5,'entrance':6
  };
  const as = posScore[a.pos] ?? 4, bs = posScore[b.pos] ?? 4;
  return Math.abs(as - bs);
}

function distLabel(steps) {
  if (steps <= 1) return '~20m';
  if (steps <= 2) return '~35m';
  if (steps <= 3) return '~50m';
  if (steps <= 4) return '~65m';
  return '~80m+';
}

function buildDirections(from, to) {
  const steps = [];
  const sameFloor = from.f === to.f;
  const fromFloor = parseInt(from.f);
  const toFloor   = parseInt(to.f);

  // Step 1 — Start
  steps.push({
    icon:'📍', type:'start', isStart:true,
    instruction:`Start at <strong>${from.name}</strong> on the ${floorName(from.f)}.`,
    dist:''
  });
  if (sameFloor) {
    // ── SAME FLOOR ──
    if (from.wing === to.wing && from.pos === to.pos) {
      steps.push({
        icon:'🚶', type:'walk',
        instruction:`Walk along the ${from.wing} wing corridor towards <strong>${to.name}</strong>.`,
        dist: '~15m'
      });
    } else {
      // Move to central corridor if needed
      const needsCorridor = from.wing !== 'center' && to.wing !== 'center' && from.wing !== to.wing;
      if (needsCorridor) {
        steps.push({
          icon:'🚶', type:'walk',
          instruction:`Head towards the <strong>main central corridor</strong> on the ${floorName(from.f)}.`,
          dist: '~20m'
        });
      }

      // Horizontal movement
      const hDir = horizontalDir(from.pos || from.wing, to.pos || to.wing);
      if (hDir) {
        const d = distLabel(stepsBetween(from, to));
        steps.push({
          icon: hDir.includes('east') ? '→' : '←',
          type: hDir.includes('east') ? 'turn-right' : 'turn-left',
          instruction:`Walk <strong>${hDir}</strong> along the corridor towards ${wingOf(to)}.`,
          dist: d
        });
      }

      // Vertical movement (north/south)
      const vDir = verticalDir(from.pos, to.pos);
      if (vDir) {
        steps.push({
          icon:'⬆', type:'walk',
          instruction:`Continue <strong>${vDir}</strong> to reach the area of <strong>${to.name}</strong>.`,
          dist: '~20m'
        });
      }

      // Special landmarks as waypoints
      if (to.group === 'labs') {
        steps.push({icon:'🔬', type:'walk',
          instruction:`You will see the <strong>laboratory wing</strong> on your left. Enter the correct lab.`, dist:''});
      }
      if (to.group === 'divisions' || to.group === 'admin') {
        steps.push({icon:'🏢', type:'walk',
          instruction:`Look for the office signage along the corridor.`, dist:''});
      }
      if (to.group === 'staff-cubicles') {
        steps.push({icon:'🗂', type:'walk',
          instruction:`Enter the <strong>south block</strong>. The cubicles are arranged in two columns — look for the name placard on the door.`, dist:'~10m'});
      }
      if (to.group === 'staff-rooms') {
        steps.push({icon:'🗂', type:'walk',
          instruction:`Enter the <strong>west block</strong>. Staff rooms are numbered along the corridor.`, dist:'~10m'});
      }
    }
  } else {
    // ── CROSS FLOOR ──
    const goingUp = toFloor > fromFloor;
    const liftType = toFloor === 4 ? 'New Lift' : 'New Lift or Old Lift';
    const liftDir  = goingUp ? 'up' : 'down';

    // Walk to lift from starting location
    if (from.wing !== 'center') {
      const hDir = horizontalDir(from.pos || from.wing, 'center');
      if (hDir) {
        steps.push({
          icon:'🚶', type:'walk',
          instruction:`From <strong>${from.name}</strong>, walk <strong>${hDir}</strong> along the corridor towards the central lift lobby.`,
          dist: distLabel(stepsBetween(from, {pos:'center'}))
        });
      } else {
        steps.push({
          icon:'🚶', type:'walk',
          instruction:`Walk to the <strong>central corridor</strong> near the lift area on the ${floorName(from.f)}.`,
          dist:'~25m'
        });
      }
    }

    // Take lift
    if (toFloor === 4) {
      steps.push({
        icon:'🛗', type:'lift', isFloor:true,
        instruction:`Take the <strong>New Lift</strong> ${liftDir} to the <strong>${floorName(to.f)}</strong>. (Only the New Lift serves Floor 4.)`,
        dist:''
      });
    } else {
      steps.push({
        icon:'🛗', type:'lift', isFloor:true,
        instruction:`Take the <strong>${liftType}</strong> ${liftDir} to the <strong>${floorName(to.f)}</strong>.`,
        dist:''
      });
    }

    // If multiple floors in between
    const floorsSkipped = Math.abs(toFloor - fromFloor) - 1;
    if (floorsSkipped > 0) {
      steps.push({
        icon:'↕', type:'floor-change', isFloor:true,
        instruction:`Pass through ${floorsSkipped} intermediate floor${floorsSkipped>1?'s':''} without exiting.`,
        dist:''
      });
    }

    // Exit lift
    steps.push({
      icon:'🚪', type:'walk',
      instruction:`Exit the lift on the <strong>${floorName(to.f)}</strong>. You are now in the central corridor.`,
      dist:''
    });
    // Walk to destination on target floor
    if (to.wing !== 'center') {
      const hDir = horizontalDir('center', to.pos || to.wing);
      if (hDir) {
        const d = distLabel(stepsBetween({pos:'center'}, to));
        steps.push({
          icon: hDir.includes('east') ? '→' : '←',
          type: hDir.includes('east') ? 'turn-right' : 'turn-left',
          instruction:`Turn and walk <strong>${hDir}</strong> along the ${floorName(to.f)} corridor towards ${wingOf(to)}.`,
          dist: d
        });
      } else {
        // north/south
        const vDir = verticalDir({pos:'center'}, to);
        if (vDir) {
          steps.push({
            icon:'⬆', type:'walk',
            instruction:`Walk <strong>${vDir}</strong> to reach ${wingOf(to)}.`,
            dist:'~25m'
          });
        }
      }
    }

    // Special cues for destination type
    if (to.group === 'labs') {
      steps.push({icon:'🔬', type:'walk',
        instruction:`The laboratory wing is ahead. Enter <strong>${to.name}</strong>.`, dist:''});
    }
    if (to.group === 'staff-cubicles') {
      steps.push({icon:'🗂', type:'walk',
        instruction:`Enter the <strong>south block</strong> of the 3rd floor. Find the cubicle by the name placard.`, dist:'~10m'});
    }
    if (to.group === 'staff-rooms') {
      steps.push({icon:'🗂', type:'walk',
        instruction:`Enter the <strong>west block</strong>. Rooms are numbered — look for <strong>${to.name}</strong>.`, dist:'~10m'});
    }
    if (to.type === 'library') {
      steps.push({icon:'📚', type:'walk',
        instruction:`Follow signs for the <strong>Library</strong>. The bags locker is at the entrance.`, dist:'~10m'});
    }
  }

  // Final arrival
  steps.push({
    icon:'🏁', type:'arrive', isEnd:true,
    instruction:`You have arrived at <strong>${to.name}</strong> on the ${floorName(to.f)}.`,
    dist:''
  });
  // Distance + time estimate
  const baseSteps = sameFloor ? stepsBetween(from,to) : Math.abs(fromFloor-toFloor)*3 + stepsBetween(from,to);
  const totalM = 15 + baseSteps * 18;
  const totalDist = `~${totalM} metres`;
  const totalTime = totalM < 60 ? '1–2 min walk' : totalM < 120 ? '2–3 min walk' : '3–5 min walk';
  return { steps, totalDist, totalTime, floors: sameFloor ? [from.f] : [from.f, to.f] };
}

// ═══════════════════════════════════════════════════
//  UI STATE
// ═══════════════════════════════════════════════════
let startFloor = 'all', destFloor = 'all';
let selStart = null, selDest = null;
function setFloor(side, floor, el) {
  if (side==='start') { 
    startFloor=floor; 
    document.querySelectorAll('#startTabs .floor-tab').forEach(t=>t.classList.remove('active'));
  }
  else { 
    destFloor=floor;
    document.querySelectorAll('#destTabs .floor-tab').forEach(t=>t.classList.remove('active')); 
  }
  el.classList.add('active');
  renderList(side);
}

function renderList(side) {
  const floor  = side==='start' ? startFloor : destFloor;
  const query  = document.getElementById(side+'Search').value.toLowerCase().trim();
  const selId  = (side==='start' ? selStart : selDest)?.id;
  const filtered = LOCS.filter(l=>{
    const fOk = floor==='all' || l.f===floor;
    const qOk = !query || l.name.toLowerCase().includes(query);
    return fOk && qOk;
  });
  const el = document.getElementById(side+'List');
  if (!filtered.length) { 
    el.innerHTML='<div class="no-results">No locations found</div>'; 
    return;
  }

  el.innerHTML = filtered.map(l=>`
    <div class="loc-item${selId===l.id?' selected':''}" onclick="selectLoc('${side}','${l.id}')">
      <div class="loc-dot ${l.dot}"></div>
      <div class="loc-name">${l.name}</div>
      <div class="loc-floor">F${l.f}</div>
    </div>`).join('');
}

function selectLoc(side, id) {
  const loc = LOCS.find(l=>l.id===id);
  if (!loc) return;
  if (side==='start') selStart=loc; else selDest=loc;
  renderList(side);
  const info = document.getElementById(side+'Info');
  info.textContent = `✓ ${loc.name}  ·  Floor ${loc.f}`;
  info.classList.add('show');
  document.getElementById(side+'Label').textContent = loc.name;
  document.getElementById('navBtn').disabled = !(selStart && selDest);
}

function setView(v) {
  document.getElementById('placeholder').style.display = v==='placeholder'?'block':'none';
  document.getElementById('errorBox').classList.toggle('show', v==='error');
  document.getElementById('resultsBox').classList.toggle('show', v==='results');
}

function showError(msg) {
  setView('error');
  document.getElementById('errorMsg').textContent = msg;
}

function navigate() {
  if (!selStart || !selDest) return;
  if (selStart.id === selDest.id) {
    showError('The starting point and destination are the same. Please choose different locations.');
    return;
  }

  const { steps, totalDist, totalTime, floors } = buildDirections(selStart, selDest);

  document.getElementById('resetBtn').style.display='block';
  setView('results');
  document.getElementById('summaryBar').innerHTML = `
    <div class="summary-stat">
      <div class="ss-label">From</div>
      <div class="ss-value" style="font-size:.8rem">${selStart.name}</div>
    </div>
    <div class="summary-stat">
      <div class="ss-label">To</div>
      <div class="ss-value" style="font-size:.8rem;color:var(--accent-orange)">${selDest.name}</div>
    </div>
    <div class="summary-stat">
      <div class="ss-label">Distance</div>
      <div class="ss-value cyan">${totalDist}</div>
    </div>
    <div class="summary-stat">
      <div class="ss-label">Time</div>
      <div class="ss-value green">${totalTime}</div>
    </div>
    <div class="summary-stat">
      <div class="ss-label">Floors</div>
      <div class="ss-value yellow">${floors.join(' → ')}</div>
    </div>`;
  const list = document.getElementById('dirList');
  list.innerHTML = '';
  steps.forEach((s,i)=>{
    const div = document.createElement('div');
    div.className = `dir-item${s.isStart?' is-start':s.isEnd?' is-end':s.isFloor?' is-floor':''}`;
    div.style.animationDelay = (i*.055)+'s';
    const nc = s.isStart?'s':s.isEnd?'e':s.isFloor?'f':'';
    const nt = s.isStart?'▸':s.isEnd?'⚑':s.isFloor?'↕':(i+1);
    div.innerHTML = `
      <div class="dir-num ${nc}">${nt}</div>
      <div class="dir-ico">${s.icon}</div>
      <div class="dir-body">
        <div class="dir-instruction">${s.instruction}</div>
        ${s.dist?`<div class="dir-dist">${s.dist}</div>`:''}
      </div>`;
    list.appendChild(div);
  });

  const noteEl = document.getElementById('routeNote');
  const crossFloor = selStart.f !== selDest.f;
  const noteText = crossFloor
    ? `Use the <strong>New Lift</strong> to reach Floor ${selDest.f}${parseInt(selDest.f)===4?' — only the New Lift serves the 4th floor':' (Old Lift also available for floors 1–3)'}. Stairs are adjacent to the lifts if preferred.`
    : `All directions are on the <strong>${floorName(selDest.f)}</strong>. Follow the brown corridor lines marked on the floor map for the main walking routes.`;
  noteEl.innerHTML = `<strong>ℹ Tip:</strong> ${noteText}`;
  noteEl.style.display='block';
}

function resetRoute() {
  setView('placeholder');
  document.getElementById('resetBtn').style.display='none';
}

// Init
renderList('start');
renderList('dest');