import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styleUrls: ["./progress.component.scss"]
})
export class ProgressComponent implements OnInit {
  public lessonProgress: any = undefined;
  public exerciseProgress: any = undefined;

  public LeccionesLabels: string[] = ["No Completadas", "Completadas"];
  public pieChartData: number[] = [4, 1];
  public pieChartType: string = "pie";
  public pieChartOptions: any = {
    backgroundColor: ["#FF6384", "#4BC0C0"]
  };

  public faCheckmark = faCheck;

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.getProgress();
  }

  getProgress() {
    this.userService.getUserLessonProgress().subscribe(result => {
      this.lessonProgress = result;
    });
    this.userService.getUserExerciseProgress().subscribe(result => {
      this.exerciseProgress = result;
    });
  }
}
