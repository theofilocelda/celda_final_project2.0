// ===== GRANDSLAM.JS - Grand Slam Page Logic =====

const tournamentsData = [
    {
        id: 'australian',
        name: 'Australian Open',
        location: 'Melbourne, Australia',
        description: 'The first Grand Slam of the year. Known for extreme heat and fast hard courts.',
        dates: 'January 13-26, 2026',
        badge: 'Hard Court',
        icon: '🏟️'
    },
    {
        id: 'rolandgarros',
        name: 'Roland Garros',
        location: 'Paris, France',
        description: 'The premier clay court tournament. A test of endurance, strategy, and grit.',
        dates: 'May 25 - June 8, 2026',
        badge: 'Clay Court',
        icon: '🥖'
    },
    {
        id: 'wimbledon',
        name: 'Wimbledon',
        location: 'London, United Kingdom',
        description: 'The oldest and most prestigious tournament. Played on traditional grass courts.',
        dates: 'June 29 - July 12, 2026',
        badge: 'Grass Court',
        icon: '👑'
    },
    {
        id: 'usopen',
        name: 'US Open',
        location: 'New York, USA',
        description: 'The final Grand Slam of the year. Electric atmosphere under the lights.',
        dates: 'August 31 - September 13, 2026',
        badge: 'Hard Court',
        icon: '🗽'
    }
];

function renderTournaments() {
    const grid = document.getElementById('tournamentsGrid');
    if (!grid) return;
    
    grid.innerHTML = tournamentsData.map(tournament => `
        <div class="tournament-card ${tournament.id}" onclick="showTournamentDetail('${tournament.name}')">
            <div class="tournament-image-container">
                <div class="tournament-icon">${tournament.icon}</div>
                <span class="tournament-badge">${tournament.badge}</span>
            </div>
            <div class="tournament-content">
                <h3 class="tournament-name">${tournament.name}</h3>
                <div class="tournament-location">
                    <span>📍</span>
                    <span>${tournament.location}</span>
                </div>
                <p class="tournament-description">${tournament.description}</p>
                <div class="tournament-dates">
                    <span>📅</span>
                    <span>${tournament.dates}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function showTournamentDetail(tournamentName) {
    alert(`🏆 ${tournamentName}\n\nTournament details coming soon!\n\nCompete for glory and exclusive rewards!`);
}

function initPage() {
    renderTournaments();
    console.log('✅ Grand Slam page initialized');
}