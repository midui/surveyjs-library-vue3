<template>
    <SurveyComponent :model="survey" />
</template>
<script setup lang="ts">
    import { Model } from "survey-core";
    import { SurveyPDF } from "survey-pdf";
    import "./index.css";
    import { json } from "./json";

    function createSurveyPdfModel(surveyModel) {
        
        const pdfWidth = !!surveyModel && surveyModel.pdfWidth ? surveyModel.pdfWidth : 210;
        const pdfHeight = !!surveyModel && surveyModel.pdfHeight ? surveyModel.pdfHeight : 297;
        const options = {
            fontSize: 14,
            margins: {
                left: 10,
                right: 10,
                top: 10,
                bot: 10
            },
            format: [pdfWidth, pdfHeight],
            
        };
        const surveyPDF = new SurveyPDF(json, options);
        if (surveyModel) {
            surveyPDF.data = surveyModel.data;
        }
        
        return surveyPDF;
    }
    function saveSurveyToPdf(filename, surveyModel) {
        createSurveyPdfModel(surveyModel).save(filename);
    }
    const survey = new Model(json);
    survey.addNavigationItem({
        id: "survey_save_as_file",
        title: "Save as PDF",
        action: () => {
            saveSurveyToPdf("surveyResult.pdf", survey);
        }
    });
    survey.data = {
      "qualities": {
        "affordable": 3,
        "does-what-it-claims": 4,
        "better-than-others": 3,
        "easy-to-use": 5
      },
      "satisfaction-score": 4,
      "recommend": 5,
      "suggestions": "24/7 support would help a lot.",
      "price-comparison": "Not sure",
      "current-price": "correct",
      "price-limits": {
        "highest": 450,
        "lowest": 200
      },
      "email": "john.doe@example.com"
    };
</script>