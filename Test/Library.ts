interface IMathCompetetions {
    expires: number;
    starting(): void;
    ending(): void;
}

class MathCompetetions {
    expires: number;
    starting(): void {
        console.log("Start of project from Library")
    }
    ending(): void {
        console.log("End of project from Library")
    }

}

