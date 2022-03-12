[Home](../)

# Algorithms Reference

### Reference Links

### Overview

Over 20 different ways to sort, using different means, including:

- Quick Sort
- Insertion Sort
- Heap Sort
- Select Sort
- Tim Sort
- Norm Sort.
- Pigeon Sort (radix sort)

No such thing as one ‘best’ sort.

Stable Marriage Problem - uses the Gale - Shapley Algorithm to produce stable marriages for all participants. This is used all over England now to match children to day care centers, students to schools, in New York to match Rabbis to Synagogues, and in China to match students to universities.

“Where there is a problem, there is an algorithm not far behind."

**Bubble Sort** - first developed 1967 at SDC. Not good for large sizes of data. Compares 2 items in an array and ensures the largest one is at the end. Continues thru the array, then starts over and does the entire process again.

**Merge Sort:** referred to as a 'divide and conquer algorithm'. First divide into groups. Then sort the individual groups. Much more efficient with larger set of data.

- John von Neumann - pioneered Game Theory. Invented Merge Sort

1.  Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted).
2.  Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.
3.  https://en.wikipedia.org/wiki/Merge_sort
4.  [C# program to perform merge sort](https://www.testdome.com/tests/c-sharp-net-online-test/67)

**Insertion Sort:**

1.  Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.
2.  It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages: Good for smaller number of elements (8 to 20).
3.  https://en.wikipedia.org/wiki/Insertion_sort
4.  [C# program to perform insertion sort](https://www.sanfoundry.com/csharp-program-insertion-sort/)

**Quick Sort:**

1.  Quick Sort (sometimes called partition-exchange sort) is an efficient sorting algorithm, serving as a systematic method for placing the elements of an array in order. Developed by Tony Hoare in 1959[1] and published in 1961,[2] it is still a commonly used algorithm for sorting. When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort
2.  The algorithm starts by choosing a pivot value. It proceeds by partitioning the elements. Elements larger than the pivot are partitioned on the right side of the pivot and element smaller than the pivot are partitioned on the left side of the pivot. It then recursively applies the algorithm on the partitions.
3.  https://en.wikipedia.org/wiki/Quicksort
4.  [Quick Sort in C](http://snipd.net/quicksort-in-c)
