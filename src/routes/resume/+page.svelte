<script>
    import Chip from '$lib/components/Chip/Chip.svelte';
    import CommonPage from '$lib/components/CommonPage.svelte';
    import { RESUME } from '$lib/params';

    const { item, title } = RESUME;
</script>

<CommonPage {title}>
    <div class="resume">
        {#if item}
            <div class="resume-preview">
                <iframe title="resume" src="https://drive.google.com/file/d/17TzcYaSu4iJHDO4CFA2LJuMadpAn70Nh/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
            <a href={item} target="_blank" rel="noopener noreferrer">
                <Chip size={'1.25em'}>Download Resume</Chip>
            </a>
        {:else}
            <Chip>Ooops! No CV at the moment.</Chip>
        {/if}
    </div>
</CommonPage>

<style lang="scss">
    .resume {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;

        & > a {
            color: inherit;
            text-decoration: none;
            margin-top: 10px;

            &:hover {
                text-decoration: underline;
            }
        }

        .resume-preview {
            width: 100%;
            max-width: 800px; // Adjust this value based on your layout
            margin-bottom: 20px;

            iframe {
                width: 100%;
                height: 600px; // Adjust height as needed
                border: 1px solid #ddd; // Styling the iframe
            }
        }
    }
</style>