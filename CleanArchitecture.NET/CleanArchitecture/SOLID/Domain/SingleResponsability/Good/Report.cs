using static System.Runtime.InteropServices.JavaScript.JSType;

namespace SOLID.Domain.SingleResponsability.Good
{
    public class Report
    {
        public void SaveReport(IReportGenerator report, string filePath)
        {
            using (var writer = new StreamWriter(filePath))
            {
                writer.WriteLine(report.Generate());
            }
        }
    }
}
