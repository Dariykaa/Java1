import java.util.Scanner;
public class Main {
    public static void main(String[] args) {

        Scanner num = new Scanner(System.in);
        int first, second, result;
        System.out.println("Enter a number: ");
        first = num.nextInt();
        second = first + 1;
        result = first - 1;
        System.out.println("The next number for the number " +first + " is "+ second);
        System.out.println("The previous number for the number " +first + " is "+ result);


    }
}
