// Iterate all items in TOC and replace with stars
Array.from(document.querySelectorAll('#course-toc small')).forEach((x) => {
   [n, k] = x.innerHTML.replace('Progress: ', '').split('/');
   text = '';
   // Complete
   for (let i = 0; i < n; i++) text += '<img src="https://media-ed-online.github.io/art-sci-games-resources/graphics/star-filled.svg" />';
   // Incomplete
   for (let i = 0; i < k - n; i++) text += '<img src="https://media-ed-online.github.io/art-sci-games-resources/graphics/star-outline.svg" />';

   x.innerHTML = text;
});



// Add Alt Tags
$('img').each(function () {
   var curSrc = $(this).attr('src');
   // Progress Tracking: Complete
   if ( curSrc === 'https://media-ed-online.github.io/art-sci-games-resources/graphics/star-filled.svg' ) {
      $(this).attr('alt', "Icon displaying complete progress");
   }
   // Progress Tracking: Incomplete
   if ( curSrc === 'https://media-ed-online.github.io/art-sci-games-resources/graphics/star-outline.svg' ) {
      $(this).attr('alt', "Icon displaying incomplete progress");
   }
});



// Special items in TOC
$('img').each(function () {
   var specialIcon = $('#module-1545372 img').attr('title');
   // Complete
   if ( specialIcon === 'Not completed: Paper 1' ) {
      $('#module-1545372 .asset-wrapper .activityinstance .snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img, #course-toc ol#chapters li:nth-child(2) img:last-child svg path').attr('class', 'special-icon');
   }
   // Incomplete
   if ( specialIcon === 'Completed: Paper 1' ) {
      $('#module-1545372 .asset-wrapper .activityinstance .snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img, #course-toc ol#chapters li:nth-child(2) img:last-child svg path').attr('class', 'special-icon');
   }
});



// Replace Images
$('img').each(function () {
   var curSrc = $(this).attr('src');
   // Progress Tracking: Incomplete
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/core/1594831820/i/completion-auto-n' ) {
      $(this).attr('src', 'https://media-ed-online.github.io/art-sci-games-resources/graphics/star-outline.svg');
   }
   // Progress Tracking: Complete
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/core/1594831820/i/completion-auto-y' ) {
      $(this).attr('src', 'https://media-ed-online.github.io/art-sci-games-resources/graphics/star-filled.svg');
   }
   // Progress Tracking: Complete Alt
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/core/1594831820/i/completion-auto-pass' ) {
      $(this).attr('src', 'https://media-ed-online.github.io/art-sci-games-resources/graphics/star-filled.svg');
   }
   // Progress Tracking: Incomplete
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/core/1594831820/i/completion-auto-fail' ) {
      $(this).attr('src', 'https://image.flaticon.com/icons/svg/465/465313.svg');
   }
   // Course Icons: Edit, 'Add New Section'
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/theme/1594831820/pencil' ) {
      $(this).attr('src', 'https://image.flaticon.com/icons/png/512/408/408159.png');
   }
   // Course Icons: Dashboard
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/theme/1594831820/course_dashboard' ) {
      $(this).attr('src', 'https://image.flaticon.com/icons/png/512/465/465270.png');
   }
   // Course Icons: Course Tools, Course Settings
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/theme/1594831820/gear' ) {
      $(this).attr('src', 'https://image.flaticon.com/icons/png/512/465/465270.png');
      $(this).attr('style', 'border-radius: 0');
   }
   // Course Icons: Course Tools, Open Grader
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/theme/1594831820/joule_grader' ) {
      $(this).attr('src', 'https://image.flaticon.com/icons/svg/409/409048.svg');
      $(this).attr('style', 'transform: rotate(90deg)');
   }
   // Course Icons: Course Tools, Gradebook
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/theme/1594831820/gradebook' ) {
      $(this).attr('src', 'https://image.flaticon.com/icons/svg/409/409047.svg');
      $(this).attr('style', 'transform: rotate(90deg)');
   }
   // Course Icons: Course Tools, Open Reports
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/theme/1594831820/joule_reports' ) {
      $(this).attr('src', 'https://image.flaticon.com/icons/png/512/465/465235.png');
   }
   // Course Icons: Course Tools, PLD
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/theme/1594831820/pld' ) {
      $(this).attr('src', 'https://image.flaticon.com/icons/svg/408/408137.svg');
   }
   // Course Icons: Course Tools, Competencies
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/theme/1594831820/competencies' ) {
      $(this).attr('src', 'https://image.flaticon.com/icons/svg/465/465230.svg');
   }
   // Course Icons: Course Tools, Badges
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/theme/1594831820/badges' ) {
      $(this).attr('src', 'https://image.flaticon.com/icons/svg/465/465269.svg');
   }
   // Course Icons: Course Tools, Ally
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/theme_snap/1594831820/i/ally_logo' ) {
      $(this).attr('src', 'https://image.flaticon.com/icons/svg/465/465231.svg');
   }
   // Activity Icons: Assignment
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/assign/1594831820/icon' ) {
      $(this).attr('src', 'https://image.flaticon.com/icons/svg/409/409094.svg');
   }
   // Activity Icons: Choice
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/choice/1594831820/icon' ) {
      $(this).attr('src', 'https://image.flaticon.com/icons/svg/408/408196.svg');
   }
   // Activity Icons: Forums
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/hsuforum/1594831820/icon' ) {
      $(this).attr('src', 'https://image.flaticon.com/icons/svg/409/409109.svg');
   }
   // Activity Icons: Lessons
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/lesson/1594831820/icon' ) {
      $(this).attr('src', 'https://image.flaticon.com/icons/svg/409/409115.svg');
   }
   // Activity Icons: Quizzes
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/quiz/1594831820/icon' ) {
      $(this).attr('src', 'https://image.flaticon.com/icons/svg/409/409119.svg');
   }
});
