function lowerbound(array,  k) //This function finds out the lowerbound of K
        low = 0, high = array.length - 1
        ans = -1 //if the value of lowerbound is -1, indicating that the element is not present.
        while (low <= high)
            mid = low + (high - low)/2
            if (array[mid] == k){
                ans = mid;
                high = mid - 1;
            }
            else if (array[mid] > k){
                high = mid - 1;
            }
            else {
                low = mid + 1;
            }
        return ans

        // recursive approach 
        
function lowerbound(k,arr,low,high){
    
    if(low>=high){
        return low;
    }
    var mid=low+Math.floor((high-low)/2);
    if(arr[mid]===k){
        return lowerbound(k,arr,low,mid);
    }else if(arr[mid]<k){
        return lowerbound(k,arr,mid+1,high);
    }else{
        return lowerbound(k,arr,low,mid-1);
    }
    
    
}
// Note:this approach will give lower bound if no is present  
//if no is not present then it will give where the should be inserted so as array should be sorted