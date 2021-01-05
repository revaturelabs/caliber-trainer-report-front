import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReviewPageBestWorstCategoriesComponent, CategoryScore } from './review-page-best-worst-categories.component';

let testCategories:string[] = ["Jenkins", "Java", "AWS",  "Git", "DevOps", "Spring", "Junit"]
let testScores:number[] =     [    25.02,  90.05, 88.88,  25.25,    12.12,    92.12,   70.75]

describe('BestWorstCategoriesComponent', () => {
  let component: ReviewPageBestWorstCategoriesComponent;
  let fixture: ComponentFixture<ReviewPageBestWorstCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewPageBestWorstCategoriesComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPageBestWorstCategoriesComponent);
    component = fixture.componentInstance;
    component.categories = testCategories;
    component.averageScores = testScores;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should round to 2 decimal places', ()=>{
    expect(component.roundTwoDigits(0.125)).toBe(0.13);
    expect(component.roundTwoDigits(98.9988)).toBe(99)
  })

  it('should return the best 3 categories along with their scores', ()=>{
    expect(component.getBest3()).toEqual([
      new CategoryScore("Spring", 92.12), 
      new CategoryScore("Java", 90.05), 
      new CategoryScore("AWS", 88.88)]);
  })

  it('should return the worst 3 categories along with their scores', ()=>{

    expect(component.getWorst3()).toEqual([
      new CategoryScore("DevOps", 12.12), 
      new CategoryScore("Jenkins", 25.02), 
      new CategoryScore("Git", 25.25)]);
  })

});