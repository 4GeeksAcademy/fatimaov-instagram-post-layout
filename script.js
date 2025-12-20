
const heartRegular = document.getElementById('heart-regular');
const heartSolid = document.getElementById('heart-solid');
const bookmarkRegular = document.getElementById('bookmark-regular');
const bookmarkSolid = document.getElementById('bookmark-solid');

// Initial state: solid icons hidden
heartSolid.style.display = 'none';
heartSolid.style.color = 'crimson';
bookmarkSolid.style.display = 'none';


// Heart icon interactivity
heartRegular.onclick = () => {
    heartRegular.style.display = 'none';
    heartSolid.style.display = 'inline-block';
};
heartSolid.onclick = () => {
    heartSolid.style.display = 'none';
    heartRegular.style.display = 'inline-block';
};



// Bookmark icon interactivity
bookmarkRegular.onclick = () => {
    bookmarkRegular.style.display = 'none';
    bookmarkSolid.style.display = 'inline-block';
};
bookmarkSolid.onclick = () => {
    bookmarkSolid.style.display = 'none';
    bookmarkRegular.style.display = 'inline-block';
};

// <b> elements interactivity
document.querySelectorAll('b')
    .forEach( b => {
        b.onmouseover = () => {
            b.style.textDecoration = 'underline';
            b.style.cursor = 'pointer';
        };
        b.onmouseout = () => {
            b.style.textDecoration = 'none';
        };
    });

