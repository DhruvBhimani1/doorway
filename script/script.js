// Function to open the overlay and display the image
function openOverlay(imageSrc) {
    var overlay = document.getElementById('overlay');
    var overlayImage = document.getElementById('overlay-image');

    overlayImage.src = imageSrc;
    overlay.style.display = 'block';
}
// Function to close the overlay
function closeOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    // Update color code when user changes color
    const colorPicker = document.getElementById('colorPicker');
    const colorCode = document.getElementById('colorCode');

    colorPicker.addEventListener('input', function(event) {
        colorCode.textContent = event.target.value;
        let profile = document.getElementById('profile');
        let dashboard = document.getElementById('dashboard');
        profile.style.backgroundColor = event.target.value; 
        dashboard.style.backgroundColor = event.target.value; 
    });
    function show_div(){
        $('#responsive-card').removeClass('hidden');
        $('#view-card-btn').addClass('hidden')
    }

    // upload image 
    const stripInputElement = document.getElementById('strip_image');
    const stripImageElement = document.getElementById('upload_strip_image');
    const iconInputElement = document.getElementById('icon_image');
    const iconImageElement = document.getElementById('upload_icon_image');
    let stripImageUploaded = false;
    let iconImageUploaded = false;
    var card_title = `<span class="flex items-center px-6 w-full block aspect-[3/1]">
    <div class="mx-auto w-2/3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.7 31.2">
    <path fill="#ffffff" d="M-73.4-24.1h5c1.4 0 2.6-.2 3.7-.6 1.1-.4 2-.9 2.7-1.7.7-.7 1.3-1.6 1.7-2.6.4-1 .6-2.2.6-3.6 0-1.3-.2-2.4-.5-3.5-.4-1-.9-1.9-1.6-2.7-.7-.8-1.6-1.3-2.7-1.7-1.1-.4-2.3-.6-3.8-.6h-5v17zm-4.6 3.9V-45h9.6c1.9 0 3.6.3 5.2.8s3 1.3 4.2 2.4c1.2 1 2.1 2.3 2.7 3.9.7 1.5 1 3.3 1 5.3 0 1.8-.3 3.5-.9 5.1-.6 1.5-1.4 2.8-2.5 3.9s-2.5 1.9-4.1 2.5c-1.6.6-3.5.9-5.6.9H-78zm24.8-9.4c0-1.4.3-2.7.8-3.9.5-1.2 1.2-2.3 2.1-3.2.9-.9 2-1.6 3.3-2.1 1.3-.5 2.6-.8 4.1-.8 1.5 0 2.9.3 4.2.8 1.3.5 2.4 1.2 3.3 2.1.9.9 1.6 2 2.1 3.2.5 1.2.8 2.5.8 3.9s-.3 2.7-.8 3.9c-.5 1.2-1.2 2.3-2.1 3.2-.9.9-2 1.6-3.3 2.1-1.3.5-2.7.8-4.2.8s-2.9-.3-4.1-.8c-1.3-.5-2.3-1.2-3.2-2.1-.9-.9-1.6-1.9-2.1-3.2-.7-1.2-.9-2.5-.9-3.9zm4.4 0c0 .9.2 1.7.5 2.5.3.7.7 1.4 1.3 1.9.5.5 1.2 1 1.9 1.3.7.3 1.5.5 2.3.5.8 0 1.6-.1 2.3-.4.7-.3 1.3-.7 1.9-1.3.5-.5 1-1.2 1.3-1.9.3-.8.5-1.6.5-2.5 0-.9-.2-1.7-.5-2.4-.3-.8-.7-1.4-1.3-1.9-.5-.5-1.2-1-1.9-1.3-.7-.3-1.5-.5-2.3-.5-.8 0-1.6.2-2.3.5-.7.3-1.3.7-1.9 1.3-.5.5-1 1.2-1.3 1.9-.3.6-.5 1.4-.5 2.3zm19-3.9c-.5 1.2-.8 2.5-.8 3.9s.3 2.7.8 3.9c.5 1.2 1.2 2.3 2.1 3.2.9.9 2 1.6 3.2 2.1 1.3.5 2.6.8 4.1.8 1.5 0 2.9-.3 4.2-.8 1.3-.5 2.4-1.2 3.3-2.1.9-.9 1.6-1.9 2.1-3.2.5-1.2.8-2.5.8-3.9s-.3-2.7-.8-3.9c-.5-1.2-1.2-2.3-2.1-3.2-.9-.9-2-1.6-3.3-2.1-1.3-.5-2.6-.8-4.2-.8-1.5 0-2.9.3-4.1.8-1.3.5-2.4 1.2-3.3 2.1-.8 1-1.5 2-2 3.2zm4.1 6.4c-.3-.8-.5-1.6-.5-2.5s.2-1.7.5-2.5c.3-.7.7-1.4 1.3-1.9.5-.5 1.2-1 1.9-1.3.7-.3 1.5-.5 2.3-.5.8 0 1.6.2 2.3.5.7.3 1.3.7 1.9 1.3.5.5 1 1.2 1.3 1.9.3.7.5 1.6.5 2.4 0 .9-.2 1.7-.5 2.5s-.7 1.4-1.3 1.9c-.5.5-1.2 1-1.9 1.3-.7.3-1.5.4-2.3.4-.8 0-1.6-.2-2.3-.5-.7-.3-1.3-.7-1.9-1.3-.5-.3-1-1-1.3-1.7zm29.7-8L2.6-39c-1.2 0-2.2.2-3.1.6-1 .4-1.8 1-2.4 1.6l-.4-2.2h-3.6v18.7h4.4v-9c0-1 .1-1.8.4-2.6.3-.7.6-1.3 1.1-1.8.5-.5 1.1-.9 1.8-1.1.7-.3 1.5-.4 2.3-.4l.9.1zM35.3-39h-4.8l-4.3 12.9h-.1L22-38.8h-3.3l-4.1 12.7h-.1L10.2-39H5.4l6.7 18.7h4l4.2-12 4.3 12h4L35.3-39zm4.3 9.4c0 .9.2 1.7.5 2.5s.7 1.4 1.3 1.9c.5.5 1.2 1 1.9 1.3.7.3 1.5.4 2.4.4.8 0 1.6-.1 2.3-.4.7-.3 1.4-.7 1.9-1.3.5-.5 1-1.2 1.3-1.9.3-.8.5-1.6.5-2.5 0-.9-.2-1.7-.5-2.4-.3-.8-.7-1.4-1.3-1.9-.5-.5-1.2-1-1.9-1.3-.7-.3-1.5-.5-2.3-.5s-1.6.2-2.4.5c-.7.3-1.4.7-1.9 1.3-.5.5-1 1.2-1.3 1.9-.3.7-.5 1.5-.5 2.4zm-4.4 0c0-1.4.2-2.7.7-3.9.5-1.2 1.2-2.3 2-3.2.9-.9 1.9-1.6 3.2-2.1 1.2-.5 2.6-.8 4.1-.8.7 0 1.4.1 2 .2.6.1 1.2.3 1.8.6.6.2 1.1.5 1.5.8.5.3.9.6 1.3 1l.3-2.1h3.8v18.7h-3.8l-.3-2.1c-.4.4-.8.7-1.3 1-.5.3-1 .6-1.5.8-.5.2-1.1.4-1.8.5-.6.1-1.3.2-2 .2-1.5 0-2.9-.3-4.1-.8-1.2-.5-2.3-1.2-3.2-2.1-.9-.9-1.6-1.9-2-3.2-.4-.8-.7-2.1-.7-3.5zM77.7-39H73l-5.3 12.8-.2-.9-5-11.9h-4.9l7.7 18-3.3 7.2h4.8L77.7-39z" transform="translate(78 45)" style="fill-rule: evenodd; clip-rule: evenodd;"></path>
    </svg>
    </div>
    </span>`;

    var card_icon =`<div class="block w-4 sm:w-5 mt-3 ml-3 w-1/6" ><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 429.6 687.2">
    <path d="M56.7 61.8c.7-1.9 1.3-3.6 1.8-5.1 100.4-39.6 212.1-39.7 312.6 0 .6 1.6 1.2 3.4 1.9 5.3 3.2 9.6 7.6 24 12 42.8 8.8 37.7 17.7 93.2 17.7 163.4s-8.9 125.7-17.7 163.4c-4.4 18.9-8.8 33.3-12 42.8-.7 2-1.3 3.8-1.9 5.3-100.4 39.6-212.2 39.6-312.6 0-.5-1.5-1.1-3.2-1.8-5.1-3.2-9.3-7.6-23.5-12-42.2C35.9 395.1 27 339.7 27 268.3S35.9 141.4 44.7 104c4.4-18.6 8.8-32.8 12-42.2z" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 54;"></path>
    <path fill="#ffffff" d="M61.9 539.8c99.1 34 206.7 34 305.8 0 8.2 23.9-4.5 50.2-29.1 56.3-81.3 20.1-166.3 20.1-247.6 0-24.6-6.1-37.3-32.4-29.1-56.3z" style="fill-rule: evenodd; clip-rule: evenodd;"></path>
    <path fill="#ffffff" d="M92.1 626.3c80.6 20.1 164.8 20.1 245.4 0 6.1 24.5-8.8 49.6-33.7 53.7-58.9 9.6-119 9.6-177.9 0-25-4.1-39.9-29.2-33.8-53.7z" style="fill-rule: evenodd; clip-rule: evenodd;"></path>
    <path fill="#ffffff" d="M297.3 231.6c20.2 0 36.6 16.4 36.6 36.6 0 20.2-16.4 36.6-36.6 36.6-20.2 0-36.6-16.4-36.6-36.6-.1-20.2 16.3-36.6 36.6-36.6z"></path>
    </svg></div>`;

    stripInputElement.addEventListener('change', function (event) {
        displaystripImage(event, stripImageElement, 'strip');
    });

    iconInputElement.addEventListener('change', function (event) {
        displayiconImage(event, iconImageElement, 'icon');
    });

    function displaystripImage(event, imageElement, imageType) {
        const file = event.target.files[0];
        const cardStripImg = document.querySelector('#card_stripimg'); 
        const androidStripImg = document.querySelector('#android_stripimg'); 

        if (file) {
            var image = new Image();
            image.src = window.URL.createObjectURL(file);
            image.onload = function () {
                if (this.naturalWidth < 1033 || this.naturalHeight < 407) {
                } else {
                    $('#upload_strip_imgbtn').addClass('hidden');
                    $('#close_strip_imgbtn').removeClass('hidden').addClass('block');
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        imageElement.src = e.target.result;
                        cardStripImg.innerHTML = `<div class="w-full overflow-hidden strip-preview">
                        <img class="even:hidden w-full" src="${e.target.result}" alt="Primary strip">
                        </div>`;
                        androidStripImg.innerHTML = `<div class="aspect-[1033/407] overflow-hidden"><div class="w-full overflow-hidden strip-preview">
                        <img class="even:hidden w-full" src="${e.target.result}" alt="Primary strip">
                        </div></div`;
                    };

                    stripImageUploaded = true;
                    if (stripImageUploaded && iconImageUploaded) {
                        $('#submitbtn_deactivate').removeClass('block').addClass('hidden');
                        $('#submitbtn_active').removeClass('hidden').addClass('block');
                    }
                    reader.readAsDataURL(file);
                }
            };
        }
    }

    function displayiconImage(event, imageElement, imageType) {
        const file = event.target.files[0];
        const card_iconimg = document.querySelector('#card_iconimg'); 
        const androidiconimg = document.querySelector('#android_iconimg'); 

        if (file) {
            var image = new Image();
            image.src = window.URL.createObjectURL(file);
            image.onload = function () {
                if (this.naturalWidth < 1200 || this.naturalHeight < 1200) {
                } else {
                    $('#upload_icon_imgbtn').addClass('hidden');
                    $('#close_icon_imgbtn').removeClass('hidden').addClass('block');
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        imageElement.src = e.target.result;
                        card_iconimg.innerHTML = `<img class="even:hidden" src="${e.target.result}" alt="Logo">`;
                        androidiconimg.innerHTML = `<img class="even:hidden" src="${e.target.result}" alt="Logo">`;
                    };
                    iconImageUploaded  = true;
                    reader.readAsDataURL(file);
                    if (stripImageUploaded && iconImageUploaded) {
                        $('#submitbtn_deactivate').removeClass('block').addClass('hidden');
                        $('#submitbtn_active').removeClass('hidden').addClass('block');
                    }
                }
            };
        }
    }   

    //close the image or remove image 
    $('#close_strip_imgbtn').on('click', function() {
        $('#upload_strip_image').attr('src', '');
        $('#upload_strip_imgbtn').removeClass('hidden').addClass('block');
        $('#close_strip_imgbtn').removeClass('block').addClass('hidden');
        $('#card_stripimg').html(card_title);
        $('#android_stripimg').html(card_title);
    });

    $('#close_icon_imgbtn').on('click', function() {
        $('#upload_icon_image').attr('src', '');
        $('#upload_icon_imgbtn').removeClass('hidden').addClass('block');
        $('#close_icon_imgbtn').removeClass('block').addClass('hidden');
        $('#card_iconimg').html(card_icon);
        $('#android_iconimg').html(card_icon);
    });

    // for show second page and hide first page
    $('#submitbtn_active').on('click', function(){
      $('#second_page').removeClass('hidden').addClass('block');
      $('#first_page').removeClass('block').addClass('hidden');
      $('#heading_bottom').removeClass('flex').addClass('hidden');
      $('#first_step_bg').removeClass('bg-electricGreen');
      $('#first_step_text').removeClass('text-electricGreen');
      $('#second_step_bg').addClass('bg-electricGreen');
      $('#second_step_text').addClass('text-electricGreen');
  });
});


$(document).ready(function () {
    $('input[name="job_title"], input[name="first_name"], input[name="last_name"]').keyup(function(){
        const defaultTexts = {
            'job_title': 'CHIEF NETWORKING OFFICER',
            'first_name': 'Jane',
            'last_name': 'Appleseed' 
        };
        var inputtext = $(this).val();
        var fieldName = $(this).attr('name');
        var response = $(this).attr('name') === 'job_title' ? $('#apple_jobtitle, #android_jobtitle') : 
        $(this).attr('name') === 'first_name' ? $('#apple_firstname, #android_firstname') : 
        $('#apple_lastname, #android_lastname');

        if (inputtext.trim() === '') {
            response.text(defaultTexts[fieldName]);
        } else {
           response.text(inputtext);
        }
   });
});
