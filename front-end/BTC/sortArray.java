//Refactor following code to get clean, readable code without coding smells.
//You can do your changes just here and let me know when done

import java.util.ArrayList;
import java.util.Scanner;


public class SortArray {
 public static void sort(ArrayList list) {
  Integer temp;
  // complexity n^2 
  
  for (int i = 0; i < list.size(); ++i) {
   for (int j = 0; j < list.size() - 1; ++j) {
    if (list.get(j).compareTo(list.get(j + 1)) > 0) {
     temp = list.get(j);
     list.set(j, list.get(j + 1));
     list.set(j + 1, temp);
    }
   }
  }
 }
 public static void main(String[] args) {
  Scanner in = new Scanner(System.in);
  ArrayList list = new ArrayList < > ();
  System.out.println("Enter 5 numbers: ");
  for (int i = 0; i < 5; ++i) {
   list.add( in .nextInt());
  }
  System.out.println("Normal list: " + list.toString());
  sort(list);
  System.out.println("Sorted list: " + list.toString());
 }
}

//another hint: think of yourself as contributing to the 'clean code' chapter of a
//book about programming. The code above is the bad example at the beginning.
//With your refactored example, you should show the reader the difference between code that is working
//and code that is clean, maintainable and unlikely to introduce bugs


