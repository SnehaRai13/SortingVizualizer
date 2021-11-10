async function partition(ele,s,e)
{
    ele[e].style.background='red'; //pivot element
    let i=s-1;

    for(let j=s;j<=e-1;j++)//   s=starting point;e=end point;
    {
        // color current element
        ele[j].style.background = 'blue';
        // pauseChamp
       await waitforme(delay);

        if(parseInt(ele[j].style.height)<parseInt(ele[e].style.height))
        {
            i++;
            let temp=ele[i].style.height;
            ele[i].style.height=ele[j].style.height;
            ele[j].style.height=temp;

            ele[i].style.background = 'yellow';
            if(i != j) ele[j].style.background = 'yellow';
            // pauseChamp
            await waitforme(1000);
        }

        else
        {
            ele[j].style.background='purple'; //if not less than pivot
        }
    }
    i++;
    await waitforme(1000);
    temp=ele[i].style.height;
    ele[i].style.height=ele[e].style.height;
    ele[e].style.height=temp;

    // color
    // ele[e].style.background = 'black';
    ele[i].style.background = 'green';

    // pauseChamp
    await waitforme(1000);
    
    // color
    for(let k = 0; k < ele.length; k++)
    {
        if(ele[k].style.background != 'green')
            ele[k].style.background = 'whitesmoke';
    }

    return i;
}

async function quicksort(ele, s, e)
{
    if(s<e)
    {
        let pivot= await partition(ele, s, e);
        await quicksort(ele, s ,pivot-1);
        await quicksort(ele, pivot+1 ,e);
    }
    else
    {
        if(s >= 0 && e >= 0 && s < ele.length && e < ele.length)
        {
            ele[e].style.background = 'green';
            ele[s].style.background = 'green';
        }
    }
}

const quickSortbtn = document.querySelector(".quickSort");

quickSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let s = 0;
    let e = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();

    document.querySelector(".newArray").disabled = true;
    await quicksort(ele, s,e);
    enableSortingBtn();
    enableSizeSlider();

    document.querySelector(".newArray").disabled = false;

});

