import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styleUrls: ["./progress.component.scss"]
})
export class ProgressComponent implements OnInit {
  public lessonProgress: any = undefined;
  public exerciseProgress: any = undefined;

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
