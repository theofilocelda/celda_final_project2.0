// ===== PLAYERS.JS - Players, Rackets & Ranking Rotation =====

const playerRankings = [
  'aryna-sabalenka',      // #1
  'elena-rybakina',       // #2
  'coco-gauff',           // #3
  'iga-swiatek',          // #4
  'jessica-pegula',       // #5
  'amanda-anisimova',     // #6
  'elina-svitolina',      // #7
  'mirra-andreeva',       // #8
  'jasmine-paolini',      // #9
  'victoria-mboko'        // #10
];

// Racket data with full descriptions
const racketData = {
  'aryna-sabalenka': {
    name: 'Head Speed MP 2026',
    image: 'assets/players/racket/1 Head Speed Boom series.png',
    description: 'Made for easy power and comfort. Has a large sweet spot, so it is forgiving even if your hit is not perfect. Very easy to swing and fast, good for beginners to intermediate players. Helps produce spin and smooth shots without much effort.'
  },
  'elena-rybakina': {
    name: 'Wilson Blade 98 V9',
    image: 'assets/players/racket/2 Wilson Blade.png',
    description: 'Focused on control and accuracy. Gives a soft feel when hitting the ball. Requires good technique to use properly. Best for players who like precision and controlled shots.'
  },
  'coco-gauff': {
    name: 'Head Speed Boom series',
    image: 'assets/players/racket/3 Head Speed Boom series.png',
    description: 'Made for easy power and comfort. Has a large sweet spot, so it is forgiving even if your hit is not perfect. Very easy to swing and fast, good for beginners to intermediate players. Helps produce spin and smooth shots without much effort.'
  },
  'iga-swiatek': {
    name: 'Tecnifibre T-Fight 285',
    image: 'assets/players/racket/4 Tecnifibre T-Fight T-Rebound.png',
    description: 'Known for stability and consistency. Gives a solid and clean feel on contact. Good for players who like long rallies and control. Balanced but leans more toward control than power.'
  },
  'jessica-pegula': {
    name: 'Yonex EZONE 98',
    image: 'assets/players/racket/5 Yonex EZONE 98.png',
    description: 'Offers balance of power and control. Very comfortable on the arm. Unique head shape gives a bigger sweet spot. Good for all-around players.'
  },
  'amanda-anisimova': {
    name: 'Babolat Pure Drive',
    image: 'assets/players/racket/6 Babolat Pure series.png',
    description: 'Designed for maximum power. Helps you hit fast and deep shots easily. Very popular for aggressive baseline players. Feels a bit stiff, so control is slightly less than control rackets.'
  },
  'elina-svitolina': {
    name: 'Wilson Burn Blade',
    image: 'assets/players/racket/7 Wilson Burn Blade.png',
    description: 'Built for spin and aggressive play. Helps create heavy topspin shots. Strong and powerful feel from the baseline. Good for players who like fast and attacking rallies.'
  },
  'mirra-andreeva': {
    name: 'Wilson Burn 100LS V5',
    image: 'assets/players/racket/8 Wilson Burn 100LS.png',
    description: 'A lighter version of Burn. Easier to swing and control. Still gives spin, but with more comfort and less weight. Good for intermediate players.'
  },
  'jasmine-paolini': {
    name: 'Yonex EZONE 100SL',
    image: 'assets/players/racket/9 Yonex EZONE 100SL.png',
    description: 'Very lightweight and comfortable. Easy to swing, good for beginners. Has a large sweet spot for easy hitting. Gives a mix of comfort and moderate power.'
  },
  'victoria-mboko': {
    name: 'Yonex EZONE 100SL',
    image: 'assets/players/racket/10 Yonex EZONE 100SL.png',
    description: 'Very lightweight and comfortable. Easy to swing, good for beginners. Has a large sweet spot for easy hitting. Gives a mix of comfort and moderate power.'
  }
};

const playerData = {
  'aryna-sabalenka': {
    rank: 1,
    name: '1. ARYNA SABALENKA',
    description: 'A very powerful player who likes to attack early in rallies. She uses strong serves and big groundstrokes to pressure her opponents.',
    mainImage: 'assets/players/Sabalenka.png.png',
    variantImages: [
      'assets/players/Sabalenka.png.png',
      'assets/players/racket/1 Head Speed Boom series.png', 
      'assets/players/Sabalenka.png.png'
    ]
  },
  'elena-rybakina': {
    rank: 2,
    name: '2. ELENA RYBAKINA',
    description: 'Plays a calm and controlled game. She relies on her strong serve and clean, accurate shots to win points without rushing.',
    mainImage: 'assets/players/Rybakina.png',
    variantImages: [
      'assets/players/Rybakina.png',
      'assets/players/racket/2 Wilson Blade.png', 
      'assets/players/Rybakina.png'
    ]
  },
  'coco-gauff': {
    rank: 3,
    name: '3. COCO GAUFF',
    description: 'Very fast and athletic on the court. She has great defense and is improving her attacking shots, making her more complete.',
    mainImage: 'assets/players/gauf.png',
    variantImages: [
      'assets/players/gauf.png',
      'assets/players/racket/3 Head Speed Boom series.png', 
      'assets/players/gauf.png'
    ]
  },
  'iga-swiatek': {
    rank: 4,
    name: '4. IGA ŚWIĄTEK',
    description: 'Known for consistency and excellent footwork. She controls rallies well and rarely makes easy mistakes.',
    mainImage: 'assets/players/swiatek.png',
    variantImages: [
      'assets/players/swiatek.png',
      'assets/players/racket/4 Tecnifibre T-Fight T-Rebound.png', 
      'assets/players/swiatek.png'
    ]
  },
  'jessica-pegula': {
    rank: 5,
    name: '5. JESSICA PEGULA',
    description: 'A smart and steady player who reads the game well. She focuses on keeping the ball in play and waiting for the right moment to attack.',
    mainImage: 'assets/players/pegula.png',
    variantImages: [
      'assets/players/pegula.png',
      'assets/players/racket/5 Yonex EZONE 98.png', 
      'assets/players/pegula.png'
    ]
  },
  'amanda-anisimova': {
    rank: 6,
    name: '6. AMANDA ANISIMOVA',
    description: 'An aggressive player with a strong backhand. She likes to hit winners and take control of points early.',
    mainImage: 'assets/players/Anisimova.png',
    variantImages: [
      'assets/players/Anisimova.png',
      'assets/players/racket/6 Babolat Pure series.png', 
      'assets/players/Anisimova.png'
    ]
  },
  'elina-svitolina': {
    rank: 7,
    name: '7. ELINA SVITOLINA',
    description: 'A defensive and quick player who moves very well. She returns many balls and forces opponents to make mistakes.',
    mainImage: 'assets/players/Svitolina.png',
    variantImages: [
      'assets/players/Svitolina.png',
      'assets/players/racket/7 Wilson Burn Blade.png', 
      'assets/players/Svitolina.png'
    ]
  },
  'mirra-andreeva': {
    rank: 8,
    name: '8. MIRRA ANDREEVA',
    description: 'A young and fearless player who plays with confidence. She adapts quickly and is not afraid to challenge top opponents.',
    mainImage: 'assets/players/Andreeva.png',
    variantImages: [
      'assets/players/Andreeva.png',
      'assets/players/racket/8 Wilson Burn 100LS.png', 
      'assets/players/Andreeva.png'
    ]
  },
  'jasmine-paolini': {
    rank: 9,
    name: '9. JASMINE PAOLINI',
    description: 'A quick and energetic player with strong movement. She relies on consistency and speed to stay competitive in long rallies.',
    mainImage: 'assets/players/Paolini.png',
    variantImages: [
      'assets/players/Paolini.png',
      'assets/players/racket/9 Yonex EZONE 100SL.png', 
      'assets/players/Paolini.png'
    ]
  },
  'victoria-mboko': {
    rank: 10,
    name: '10. VICTORIA MBOKO',
    description: 'A rising talent with a powerful style of play. She shows strong potential and continues to improve her overall game.',
    mainImage: 'assets/players/Mboko.png',
    variantImages: [
      'assets/players/Mboko.png',
      'assets/players/racket/10 Yonex EZONE 100SL.png', 
      'assets/players/Mboko.png'
    ]
  }
};

let currentPlayerIndex = 0;
let currentView = 'player'; // 'player' or 'racket'
let currentRacketPlayerId = null;

function getPlayerByRankOffset(currentIndex, offset) {
  const total = playerRankings.length;
  const newIndex = ((currentIndex + offset) % total + total) % total;
  return playerRankings[newIndex];
}

function getRelatedPlayers(currentIndex) {
  return {
    left: [
      getPlayerByRankOffset(currentIndex, -1), 
      getPlayerByRankOffset(currentIndex, -2)  
    ],
    right: [
      getPlayerByRankOffset(currentIndex, 1),  
      getPlayerByRankOffset(currentIndex, 2)   
    ]
  };
}

// Show racket details
function showRacketDetails(playerId) {
  const racket = racketData[playerId];
  if (!racket) return;

  currentView = 'racket';
  currentRacketPlayerId = playerId;

  const nameEl = document.getElementById('displayName');
  const descEl = document.getElementById('displayDescription');
  const mainImg = document.getElementById('mainImage');
  const mainContainer = document.getElementById('mainImageContainer');

  // Fade out
  nameEl.style.opacity = '0';
  descEl.style.opacity = '0';
  mainImg.style.opacity = '0';

  setTimeout(() => {
    nameEl.textContent = racket.name;
    descEl.textContent = racket.description;
    mainImg.src = racket.image;
    
    // Add racket badge
    nameEl.style.color = '#FF6B35';
    
    // Fade in
    nameEl.style.transition = 'all 0.4s ease';
    descEl.style.transition = 'all 0.4s ease';
    mainImg.style.transition = 'all 0.4s ease';
    nameEl.style.opacity = '1';
    descEl.style.opacity = '1';
    mainImg.style.opacity = '1';
    
    // Hide related players when viewing racket
    document.querySelector('.related-characters.left-side').style.opacity = '0.3';
    document.querySelector('.related-characters.right-side').style.opacity = '0.3';
  }, 300);

  // Update variant circles
  updateVariantCircles(playerId, true);
}

// Show player details
function showPlayerDetails(playerId) {
  const player = playerData[playerId];
  if (!player) return;

  currentView = 'player';
  currentRacketPlayerId = null;

  const nameEl = document.getElementById('displayName');
  const descEl = document.getElementById('displayDescription');
  const mainImg = document.getElementById('mainImage');

  // Fade out
  nameEl.style.opacity = '0';
  descEl.style.opacity = '0';
  mainImg.style.opacity = '0';

  setTimeout(() => {
    nameEl.textContent = player.name;
    descEl.textContent = player.description;
    mainImg.src = player.mainImage;
    
    // Reset color
    nameEl.style.color = '';
    
    // Fade in
    nameEl.style.transition = 'all 0.4s ease';
    descEl.style.transition = 'all 0.4s ease';
    mainImg.style.transition = 'all 0.4s ease';
    nameEl.style.opacity = '1';
    descEl.style.opacity = '1';
    mainImg.style.opacity = '1';
    
    // Show related players
    document.querySelector('.related-characters.left-side').style.opacity = '1';
    document.querySelector('.related-characters.right-side').style.opacity = '1';
  }, 300);

  updateRelatedPlayersByRank(playerRankings.indexOf(playerId));
  updateVariantCircles(playerId, false);
}

function updateVariantCircles(playerId, isRacketView) {
  const player = playerData[playerId];
  const variantImages = document.querySelectorAll('.variant-image');
  
  player.variantImages.forEach((src, i) => {
    if (variantImages[i]) {
      variantImages[i].style.opacity = '0';
      setTimeout(() => {
        if (i === 1 && isRacketView) {
          // Show racket image highlighted
          variantImages[i].src = player.variantImages[1];
        } else {
          variantImages[i].src = src;
        }
        
        variantImages[i].onerror = function() { 
          this.style.display = 'none';
        };
        
        variantImages[i].style.transition = 'opacity 0.3s ease';
        variantImages[i].style.opacity = i === 1 && isRacketView ? '1' : '0.6';
      }, 100 * i);
    }
  });

  // Update active states
  document.querySelectorAll('.variant-circle').forEach((circle, i) => {
    circle.classList.toggle('active', (i === 1 && isRacketView) || (i === 0 && !isRacketView));
  });
}

function updatePlayerContent(playerId) {
  showPlayerDetails(playerId);
  window.location.hash = playerId;
}

function updateRelatedPlayersByRank(currentIndex) {
  const leftSide = document.querySelector('.related-characters.left-side');
  const rightSide = document.querySelector('.related-characters.right-side');
  if (!leftSide || !rightSide) return;

  leftSide.innerHTML = '';
  rightSide.innerHTML = '';

  const related = getRelatedPlayers(currentIndex);
  const colors = ['orange', 'green', 'blue', 'purple'];

  leftSide.appendChild(createRelatedCard(related.left[1], colors[0], playerData[related.left[1]].rank));
  leftSide.appendChild(createRelatedCard(related.left[0], colors[1], playerData[related.left[0]].rank));

  rightSide.appendChild(createRelatedCard(related.right[0], colors[2], playerData[related.right[0]].rank));
  rightSide.appendChild(createRelatedCard(related.right[1], colors[3], playerData[related.right[1]].rank));

  document.querySelectorAll('.related-card').forEach(card => {
    card.addEventListener('click', function() {
      const playerId = this.getAttribute('data-player');
      switchPlayer(playerId);
    });
  });
}

function createRelatedCard(playerId, colorClass, rank) {
  const player = playerData[playerId];
  const card = document.createElement('div');
  card.className = 'related-card';
  card.setAttribute('data-player', playerId);

  const bg = document.createElement('div');
  bg.className = `card-background ${colorClass}`;

  const imgDiv = document.createElement('div');
  imgDiv.className = 'related-image';

  const img = document.createElement('img');
  img.src = player.mainImage;
  img.alt = player.name;
  img.className = 'related-player-image';

  const rankBadge = document.createElement('div');
  rankBadge.className = 'rank-badge';
  rankBadge.textContent = `#${rank}`;

  imgDiv.appendChild(img);
  imgDiv.appendChild(rankBadge);
  card.appendChild(bg);
  card.appendChild(imgDiv);
  return card;
}

function switchPlayer(playerId) {
  if (playerId === playerRankings[currentPlayerIndex] || !playerData[playerId]) return;
  if (currentView === 'racket') currentView = 'player';
  
  currentPlayerIndex = playerRankings.indexOf(playerId);
  showPlayerDetails(playerId);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleVariantClick(index) {
  const playerId = playerRankings[currentPlayerIndex];
  
  if (index === 1) {
    // Clicked racket button
    showRacketDetails(playerId);
  } else {
    // Clicked player variant - switch back to player view
    showPlayerDetails(playerId);
  }
}

function nextPlayer() {
  const nextIndex = (currentPlayerIndex + 1) % playerRankings.length;
  currentPlayerIndex = nextIndex;
  if (currentView === 'racket') {
    showRacketDetails(playerRankings[nextIndex]);
  } else {
    showPlayerDetails(playerRankings[nextIndex]);
  }
}

function previousPlayer() {
  const prevIndex = (currentPlayerIndex - 1 + playerRankings.length) % playerRankings.length;
  currentPlayerIndex = prevIndex;
  if (currentView === 'racket') {
    showRacketDetails(playerRankings[prevIndex]);
  } else {
    showPlayerDetails(playerRankings[prevIndex]);
  }
}

function initPage() {
  const hash = window.location.hash.replace('#', '');
  if (hash && playerData[hash]) {
    currentPlayerIndex = playerRankings.indexOf(hash);
    updatePlayerContent(hash);
  } else {
    updatePlayerContent(playerRankings[0]);
  }

  // Variant circle click handlers
  document.querySelectorAll('.variant-circle').forEach((circle, index) => {
    circle.addEventListener('click', () => handleVariantClick(index));
  });

  // More info button
  document.getElementById('moreInfoBtn').addEventListener('click', function() {
    if (currentView === 'racket' && currentRacketPlayerId) {
      alert(`${racketData[currentRacketPlayerId].name}\n\n${racketData[currentRacketPlayerId].description}`);
    } else {
      const playerId = playerRankings[currentPlayerIndex];
      alert(`${playerData[playerId].name}\n\n${playerData[playerId].description}`);
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextPlayer();
    if (e.key === 'ArrowLeft') previousPlayer();
  });

  console.log('✅ Racket detail view enabled - Click middle circle!');
}