export const VodSource = {
    MS : {
        title : 'MS오피스 문서 분석 전략',
        comment : '악성 MS 오피스 문서 파일을 판별하기 위해서는 기본적으로 악성 MS 오피스 문서 파일이 가진 이상 징후의 특징을 파악하고 특징이 관찰될 수 밖에 없는 기술적 배경에 대해서 이해하는 것이 가장 중요합니다. 해당 동영상은 분석 대상 MS 오피스 문서에 대한 이상징후식별(Triage)의 대한 전체적인 내용을 담고 있습니다. 예를 들어 OLEDUMP 등의 도구를 활용하여 파일의 내부에 있는 스토리지 및 스트림의 구조적 이상징후를 식별 하거나 악성 데이터 패턴의 존재 여부를 확인할 수 있습니다.',
        src : 'https://objectstorage.ap-seoul-1.oraclecloud.com/p/YZ-HzWkAKz_0ZYDnUorrEM1eKziarsPgzsOf_TUEZu1US3aqjt5WtjU6F3mAY-_t/n/cnlkg4dnisfp/b/training-contents-develop/o/%EC%95%85%EC%84%B1%20MS%EC%98%A4%ED%94%BC%EC%8A%A4%20%EB%AC%B8%EC%84%9C%20%EB%B6%84%EC%84%9D%20%EC%A0%84%EB%9E%B5.mp4',
    },
    HWP : {
        title : 'HWP오피스 문서 분석 전략',
        comment : '악성 HWP 문서 파일을 판별하기 위해서는 기본적으로 악성 HWP 문서 파일이 가진 이상 징후의 특징을(약 5가지 이상) 파악하고 특징이 관찰될 수 밖에 없는 기술적 배경에 대해서 이해하는 것이 가장 중요합니다. 해당 동영상은 분석 대상 MS 오피스 문서에 대한 이상징후식별(Triage)의 대한 전체적인 내용을 담고 있습니다. 예를 들어 OLEDUMP 등의 도구를 활용하여 파일의 내부에 있는 스토리지 및 스트림의 구조적 이상징후를 식별 하거나 악성 데이터 패턴의 존재 여부를 확인할 수 있습니다.',
        src : 'https://objectstorage.ap-seoul-1.oraclecloud.com/p/PIFkPHLeN1hSgBXoC8va3GHjDGhyapumJbPP8bgn_JuiyAVeEIK5iKLbhUhlY-4n/n/cnlkg4dnisfp/b/training-contents-develop/o/%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%20HWP%20%E1%84%86%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%20%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%20%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%85%E1%85%A3%E1%86%A8.mp4',
    },
    DDE : {
        title : 'DDE 유형 악성 MS오피스 문서 파일 분석',
        comment : 'MS 오피스 문서 내에 선언되어 있는 DDEAUTO 명령어의 존재 여부와 해당 명령어를 통해 실행되는 코드 루틴을 식별하여 별도로 추출할 수 있습니다. DDEAUTO 명령어를 통해 실행되는 루틴은 일반적으로 윈도우의 CMD 혹은 파워쉘 스크립트와 관련 있습니다. DDE를 통해 실행되는 공격자의 프로시저를 분석하여 최종 공격자의 행위를 식별합니다.',
        src : 'https://objectstorage.ap-seoul-1.oraclecloud.com/p/BomFLstDew4KshE-xh8QE6FSZeVhoU9r1hrVkAe3l2Z8omVIUzrvN9ehUKz7kFpO/n/cnlkg4dnisfp/b/training-contents-develop/o/DDE%20%EC%9C%A0%ED%98%95%20%EC%95%85%EC%84%B1%20MS%EC%98%A4%ED%94%BC%EC%8A%A4%20%EB%AC%B8%EC%84%9C%20%ED%8C%8C%EC%9D%BC%20%EB%B6%84%EC%84%9D.mp4',
    }
}