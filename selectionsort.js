async function selection()
{
    const ele = document.querySelectorAll(".bar");


    for(let i = 0; i < ele.length; i++)
    {
        let min_i=i;
        
        ele[i].style.background = 'yellow'; //position to swap with next min
        for(let j = i+1; j < ele.length; j++)
        {
            ele[j].style.background = 'blue'; //comparision through and through

            await waitforme(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_i].style.height))
            {
                if(min_i !== i)
                {
                    ele[min_i].style.background = 'whitesmoke'; //since min is greater, min gets normal colour
                }
                min_i = j;  
            }
            else
            {
                    // if the currnent comparision is more than min_index change is back to normal
                    ele[j].style.background = 'whitesmoke';
            } 
        }

        await waitforme(1000);
    //swapping
            let temp = ele[min_i].style.height;
                ele[min_i].style.height = ele[i].style.height;
                ele[i].style.height = temp;
            
            ele[min_i].style.background = 'whitesmoke';
            ele[i].style.background = 'green'; //sorted
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");

selectionSortbtn.addEventListener('click', async function()
{
    disableSortingBtn();
    disableSizeSlider();

    document.querySelector(".newArray").disabled = true;
    await selection();
    enableSortingBtn();
    enableSizeSlider();

    // enableNewArrayBtn();
    document.querySelector(".newArray").disabled = false;
});