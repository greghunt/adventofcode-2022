package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func main() {
	top, _ := strconv.Atoi(os.Args[2])
    readFile, err := os.Open(os.Args[1])

    if err != nil {
        fmt.Println(err)
    }	

	fileScanner := bufio.NewScanner(readFile)
    fileScanner.Split(bufio.ScanLines)

	largest := []int{0, 0, 0}
	elfSum := 0
	for fileScanner.Scan() {
		if ( fileScanner.Text() == "" ) {
			for j:=0; j <= top; j++ {
				if (elfSum >= largest[j]) {
					largest = squeezeIntoIndex(elfSum, largest, j)
					break
				}
			}
			elfSum = 0
		} else {
			inv, _ := strconv.Atoi(fileScanner.Text())
			elfSum += inv
		}

    }
	
	fmt.Printf("Sum of top: %b\n", largest[0])
	fmt.Printf("Sum of top: %b\n", findArraySum(largest))
}

func findArraySum(arr []int) int{
	res := 0
	for i:=0; i<len(arr); i++ {
	   res += arr[i]
	}
	return res
 }

 func squeezeIntoIndex(item int, arr []int, index int) []int {
	size := len(arr)
	fmt.Println(size)
	fmt.Println(index)
	fmt.Println(arr)
	end := arr[index:size]
	start := arr[0:index]
	start[index] = item //something wrong here
	start = append(start, end...)
	return start[0:size]
 }