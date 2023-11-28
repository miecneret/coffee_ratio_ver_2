function selectBrewingStyle(style) {
    // Redirect to the corresponding brewing calculator page based on the selected style
    switch (style) {
        case 'V60':
            window.location.href = 'v60/v60.html';
            break;
        case 'Aeropress':
            window.location.href = 'aeropress/ap.html';
            break;
        case 'Clever Dripper':
            window.location.href = 'cleverdripper/cd.html';
            break;
        default:
            alert('Invalid brewing style');
    }
}
