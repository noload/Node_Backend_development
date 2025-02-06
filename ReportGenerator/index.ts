import axios from "axios";
import { cityReport, userProfile, userStatus } from "./datatypes.dto";
import path from "path";
import fs from "fs";
class GenerateReport {
  private users: userStatus[] = [];
  private profiles: userProfile[] = [];
  private usersUrl: string =
    "https://cdn.credilio.in/interviews/backend-e1/User.json";
  private profilesUrl: string =
    "https://cdn.credilio.in/interviews/backend-e1/UserProfile.json";

  private cityReportData: Map<string, cityReport> = new Map();

  async fetchData(): Promise<void> {
    const [userRes, profileRes] = await Promise.all([
      axios.get(this.usersUrl),
      axios.get(this.profilesUrl),
    ]);

    this.users = userRes.data;
    this.profiles = profileRes.data;
  }

  processreportData() {
    const userStatusMap: Map<string, boolean> = new Map(
      this.users.map(({ id, isActive }) => [id, isActive])
    );

    this.profiles.forEach(({ userId, city }) => {
      if (!userStatusMap.has(userId)) return;

      const userStatus = userStatusMap.get(userId);
      console.log(userStatus);

      if (!this.cityReportData.has(city)) {
        this.cityReportData.set(city, {
          city,
          activeCount: 0,
          inActiveCount: 0,
        });
      }
      let cityCount = this.cityReportData.get(city)!;

      userStatus ? cityCount.activeCount++ : cityCount.inActiveCount--;
    });
  }

  generateCSV() {
    const sortedCityData = Array.from(this.cityReportData.values()).sort(
      (a, b) => a.city.localeCompare(b.city)
    );

    const cusomSV = [
      "City,Active Count,Inactive Count",
      ...sortedCityData.map(
        ({ city, activeCount, inActiveCount }) =>
          `${city},${activeCount},${inActiveCount}`
      ),
    ].join("\n");

    const filePath = path.join(__dirname, "Report.csv");
    fs.writeFileSync(filePath, cusomSV);
  }
}

(async () => {
  const instance = new GenerateReport();
  await instance.fetchData();
  await instance.processreportData();
  await instance.generateCSV();
})();
