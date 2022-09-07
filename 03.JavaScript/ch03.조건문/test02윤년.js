const year = 2022;

if (year % 400 == 0) {
    console.log(year, '윤년');
} else if (year % 100 == 0) {
    console.log(year, '평년');
} else if (year % 4 == 0) {
    console.log(year, '윤년');
} else {
    console.log(year, '평년');
}


/* 
const year = 400;
    switch( year % 4) {
    case 0 : 
        if ( year % 400 === 0 ) 
            {console.log(year,'윤년');break;}
        else if ( year % 100 === 0 )
            {console.log(year,'평년');break;}
        else {console.log(year,'윤년'); }    
    default:
              console.log(year,'평년') 
        
        } */