// Iterate all items in TOC and replace with stars
Array.from(document.querySelectorAll('#course-toc .completionstatus small')).forEach((x) => {
   [n, k] = x.innerHTML.replace('Progress: ', '').split('/');
   text = '';
   // Complete w/Alt Text
   for (let i = 0; i < n; i++) text += '<img src="https://media-ed-online.github.io/art-sci-games-resources/graphics/stars/star-filled.png" alt="Icon displaying incomplete progress" />';
   // Incomplete w/Alt Text
   for (let i = 0; i < k - n; i++) text += '<img src="https://media-ed-online.github.io/art-sci-games-resources/graphics/stars/star-outline.png" alt="Icon displaying incomplete progress" />';

   x.innerHTML = text;
});

// Special items in TOC
$('img').each(function () {
   var specialIcon1 = $('#module-1545594 img').attr('title');
   var specialIcon2 = $('#module-1604953 img').attr('title');
   var specialIcon3 = $('#module-1604954 img').attr('title');
   var specialIcon4 = $('#module-1604955 img').attr('title');
   // Complete
   if ( specialIcon1 === 'Not completed: Welcome Chat' ) {
      $('#module-1545594 .snap-asset-completion-tracking img, #course-toc ol#chapters li:nth-child(2) img:last-child').attr('class', 'star-icon');
   }
   // Incomplete
   if ( specialIcon1 === 'Completed: Welcome Chat' ) {
      $('#module-1545594 .snap-asset-completion-tracking img, #course-toc ol#chapters li:nth-child(2) img:last-child').attr('class', 'star-icon');
   }
   // Complete
   if ( specialIcon2 === 'Not completed: Paper 2' ) {
      $('#module-1604953 .snap-asset-completion-tracking img, #course-toc ol#chapters li:nth-child(8) img:last-child').attr('class', 'star-icon');
   }
   // Incomplete
   if ( specialIcon2 === 'Completed: Paper 2' ) {
      $('#module-1604953 .snap-asset-completion-tracking img, #course-toc ol#chapters li:nth-child(8) img:last-child').attr('class', 'star-icon');
   }
   // Complete
   if ( specialIcon3 === 'Not completed: Paper 3' ) {
      $('#module-1604954 .snap-asset-completion-tracking img, #course-toc ol#chapters li:nth-child(14) img:last-child').attr('class', 'star-icon');
   }
   // Incomplete
   if ( specialIcon3 === 'Completed: Paper 3' ) {
      $('#module-1604954 .snap-asset-completion-tracking img, #course-toc ol#chapters li:nth-child(14) img:last-child').attr('class', 'star-icon');
   }
   // Complete
   if ( specialIcon4 === 'Not completed: Paper 4' ) {
      $('#module-1604955 .snap-asset-completion-tracking img, #course-toc ol#chapters li:nth-child(17) img:last-child').attr('class', 'star-icon');
   }
   // Incomplete
   if ( specialIcon4 === 'Completed: Paper 4' ) {
      $('#module-1604955 .snap-asset-completion-tracking img, #course-toc ol#chapters li:nth-child(17) img:last-child').attr('class', 'star-icon');
   }
});

// Replace Images
$('img').each(function () {
   var curSrc = $(this).attr('src');
   // Progress Tracking: Incomplete
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/core/1598947693/i/completion-auto-n' ) {
      $(this).attr('src', 'https://media-ed-online.github.io/art-sci-games-resources/graphics/stars/star-outline.svg');
   }
   // Progress Tracking: Complete
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/core/1598947693/i/completion-auto-y' ) {
      $(this).attr('src', 'https://media-ed-online.github.io/art-sci-games-resources/graphics/stars/star-filled.svg');
   }
   // Progress Tracking: Complete Alt
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/core/1598947693/i/completion-auto-pass' ) {
      $(this).attr('src', 'https://media-ed-online.github.io/art-sci-games-resources/graphics/stars/star-filled.svg');
   }
   // Progress Tracking: Incomplete
   if ( curSrc === 'https://moodle.umt.edu/theme/image.php/snap/core/1598947693/i/completion-auto-fail' ) {
      $(this).attr('src', 'https://media-ed-online.github.io/art-sci-games-resources/graphics/icons/incomplete.svg');
   }
});



// Replace right/wrong button text
$('button.btn').each(function() {
   var text = $(this).text();
   $(this).text(text.replace("Yes, I'd like to try again", "Try question again"));
});
$('button.btn').each(function() {
   var text = $(this).text();
   $(this).text(text.replace("No, I just want to go on to the next question", "Review the materials first"));
});



// Creats a pseudo-summary for activities
    $('*[data-type="Advanced Forum"]').ready(function() {
        $('.show-when-desired').attr('style', 'display: none');
    });

